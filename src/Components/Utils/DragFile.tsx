import { useState, useEffect, useRef } from "react";
function DragFileZone({
  validFiles,
  setValidFiles,
  selectedFiles,
  setSelectedFiles,
  img_file,
}) {
  // const onDragOver = ()
  const fileInputRef = useRef<any>();

  useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    setValidFiles([...filteredArr]);
  }, [selectedFiles]);

  const preventDefault = (e) => {
    e.preventDefault();
    // e.stopPropagation();
  };

  const dragOver = (e) => {
    preventDefault(e);
  };

  const dragEnter = (e) => {
    preventDefault(e);
  };

  const dragLeave = (e) => {
    preventDefault(e);
  };

  const fileDrop = (e) => {
    preventDefault(e);
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (files) => {
    if (selectedFiles.length > 3) {
      alert("Can Only Insert images currently");
    } else {
      for (let i = 0; i < files.length; i++) {
        if (validateFile(files[i])) {
          setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        } else {
          alert("Wrong format");
        }
      }
    }
  };

  const validateFile = (file) => {
    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }

    return true;
  };

  const fileSize = (size) => {
    if (size === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="flex rounded-md border-slate-400 border-2 p-4">
      <div
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        onClick={fileInputClicked}
        className={"flex flex-col items-center justify-center"}
      >
        <div>
          <h3
            style={{ color: "grey", fontFamily: "'Josefin Sans', sans-serif" }}
          >
            Drag And Drop, Or Click To Add A File
          </h3>
          <p
            style={{
              color: "rgba(0,0,0,0.7)",
              fontSize: "12px",
            }}
          >
            Only csv, xls, xlsx file formats are supported at this moment and
            file should be less than 5MB.
          </p>
          <img src={img_file} alt="productformat" />
          <p
            style={{
              color: "rgba(0,0,0,0.7)",
              fontSize: "12px",
            }}
          >
            Please make sure the file is in the format displayed above.
          </p>
        </div>
        <input
          className={
            "bg-transparent hover:bg-purple-700 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 rounded "
          }
          ref={fileInputRef}
          type="file"
          multiple
          onChange={filesSelected}
        />
      </div>
    </div>
  );
}
const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
export default DragFileZone;

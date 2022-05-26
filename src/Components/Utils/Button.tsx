import React from "react";

declare interface ButtonObject {
  label: string;
  onClick: (event: React.MouseEvent) => void;
}

export const OutlinedButton = (prop: ButtonObject) => {
  /*
    Outlined Button 
        params:
            label: string
            onClick: (event: React.MouseEvent) => void
    */
  return (
    <button
      className={
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
      }
      onClick={prop.onClick}
    >
      {prop.label}
    </button>
  );
};
export const BackgroundButton = (prop: ButtonObject) => {
  /*
    Background Colored Button 
        params:
            label: string
            onClick: (event: React.MouseEvent) => void
    */
  return (
    <button
      className={
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }
      onClick={prop.onClick}
    >
      {prop.label}
    </button>
  );
};
export const RoundedButton = (prop: ButtonObject) => {
  /*
    Background Colored Button 
        params:
            label: string
            onClick: (event: React.MouseEvent) => void
    */
  return (
    <button
      className={
        "text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
      }
      onClick={prop.onClick}
    >
      {prop.label}
    </button>
  );
};
export const SaveButton = (prop: ButtonObject) => {
  /*
    Background Colored Button 
        params:
            label: string
            onClick: (event: React.MouseEvent) => void
    */
  return (
    <button
      className={
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }
      onClick={prop.onClick}
    >
      {prop.label}
    </button>
  );
};

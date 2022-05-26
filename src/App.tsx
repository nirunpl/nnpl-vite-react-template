import "./App.css";
import { useState } from "react";
import MainRoutes from "./Components/Routes/MainRoutes";
import { AppDispatch } from "./state/shared/store/store";
import { BubbleLoading } from "./Components/Utils/Loading";

function App() {
  return (
    <div className="App">
      <div
        className={"w-full h-full flex flex-col items-center justify-center"}
      >
        <h2
          className={
            "text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-amber-300"
          }
        >
          Niru Vite Template
        </h2>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;

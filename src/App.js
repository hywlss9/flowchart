import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Toolbox from "./Toolbox";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Toolbox></Toolbox>
      </DndProvider>
    </>
  );
}

export default App;

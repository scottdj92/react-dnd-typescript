import React from "react";
import ReactDOM from "react-dom";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { FileDropBox } from "./file-drop-box";
import { File } from "./file";

const App = () => <div>
    <FileDropBox />
    <File />
</div>;

ReactDOM.render(<App/>, document.getElementById("app"));

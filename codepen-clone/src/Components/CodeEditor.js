import React from "react";
import Editor from "./Editor";

function CodeEditor() {
  return (
    <div>
      <div className="top-container">
        <Editor/>
        <Editor/>
        <Editor/>

      </div>

      <div className="bottom-container">
        <iframe
         title="output" 
         sandbox="allow-scripts"
         frameBorder="0"
         width="100%"
         height="100%"
        />
      </div>
    </div>
  );
}

export default CodeEditor;

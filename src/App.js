import React from "react";
import "./styles.css";
import { NormalPortalDemo } from "./NormalPortalDemo";
import { WindowPortalDemo } from "./WindowPortalDemo";

function App() {
  return (
    <>
      <WindowPortalDemo />
      <hr />
      <NormalPortalDemo />
    </>
  );
}

export default App;

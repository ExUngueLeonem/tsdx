import { Thing } from "../dist";

import * as React from "react";

import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <Thing/>
    </div>
  );
};

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
// const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

// const root = createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );
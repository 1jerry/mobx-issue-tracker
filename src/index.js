import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Issues from "./Issues";
import reportWebVitals from "./reportWebVitals";

const Index = () => {
  const todoApp = () => {
    window.location.pathname = "/todo";
  };
  const issueTracker = () => {
    window.location.pathname = "/issues";
  };
  const page = window.location.pathname;
  if (page === "/todo") return <App />;
  if (page === "/issues") return <Issues />;
  return (
    <>
      <button onClick={todoApp}>To do app</button>
      <button onClick={issueTracker}>Issue tracker</button>
    </>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

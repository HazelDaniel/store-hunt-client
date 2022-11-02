import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: null,
		children: [
			{
				path: "team",
				element: <Team />,
				loader: null,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

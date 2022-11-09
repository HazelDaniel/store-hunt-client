import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider,createBrowserRouter } from "react-router-dom";


import { Shop } from "./components/shop/shop.component";
import { ErrorPage } from "./components/error-page/error-page.component";
import { Home } from "./components/home/home.component";
import { Blog } from "./components/blog/blog.component";
import { Auth } from "./components/auth/auth.component";
import { Cart } from "./components/cart/cart.component";
import { Contact } from "./components/contact/contact.component";
import { Checkout } from "./components/checkout/checkout.component";
import { F04 } from "./components/F04/F04.component";
import App from "./App";
// ROUTING
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "shop",
				element: <Shop />,
			},
			{
				path: "blog",
				element: <Blog />,
			},
			{
				path: "auth",
				element: <Auth />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: "*",
		element: <F04 />,
	},
]);


ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<RouterProvider router={router} />
	// </React.StrictMode>
);

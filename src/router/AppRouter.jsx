import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { DcPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<PrivateRoute>
				<HeroesApp />
			</PrivateRoute>
		),
		errorElement: <Navigate to={"/marvel"} />,
		children: [
			{
				index: true,
				element: <Navigate to={"/marvel"} />,
			},
			{
				path: "dc",
				element: <DcPage />,
			},
			{
				path: "marvel",
				element: <MarvelPage />,
			},
			{
				path: "search",
				element: <SearchPage />,
			},
			{
				path: "hero/:id",
				element: <HeroPage />,
			},
		],
	},
	{
		path: "login",
		element: (
			<PublicRoute>
				<LoginPage />
			</PublicRoute>
		),
	},
]);

export const AppRouter = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

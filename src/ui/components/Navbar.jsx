import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/context/AuthContext";

const activeClass = {
	true: "nav-item nav-link active font-bold",
	false: "nav-item nav-link font-bold",
};

export const Navbar = () => {
	const navigate = useNavigate();

	const { user, logout } = useContext(AuthContext);

	const handleLogout = () => {
		logout();

		navigate("/login", {
			replace: true,
		});
	};

	return (
		<>
			<nav
				className='navbar navbar-expand-md bg-neutral-950 px-3'
				data-bs-theme='dark'>
				<Link
					className='navbar-brand fw-bold text-danger text-uppercase'
					to='/'>
					Heroes
				</Link>

				<div className='navbar-collapse'>
					<div className='navbar-nav'>
						<NavLink
							className={({ isActive }) => (isActive ? activeClass.true : activeClass.false)}
							to='/marvel'>
							Marvel
						</NavLink>

						<NavLink
							className={({ isActive }) => (isActive ? activeClass.true : activeClass.false)}
							to='/dc'>
							DC
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? activeClass.true : activeClass.false)}
							to='/search'>
							Search
						</NavLink>
					</div>
				</div>

				<div className='navbar-collapse w-100 d-flex justify-content-end'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item nav-link'>
							<span className='font-semibold text-emerald-500 '> {user?.name} </span>
						</li>

						<button
							className='nav-item nav-link'
							onClick={handleLogout}>
							Logout
						</button>
					</ul>
				</div>
			</nav>
		</>
	);
};

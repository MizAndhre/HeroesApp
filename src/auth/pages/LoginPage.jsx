import { useNavigate } from "react-router-dom";
import { HeroTitle } from "../../heroes/components/HeroTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
	const { user, handleInputChange } = useForm({
		user: "",
	});
	const [verified, setVerified] = useState(true);

	const navigate = useNavigate();

	const { login } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (user.trim().length === 0) {
			// mostrar la alerta
			setVerified(false);

			// eliminar alerta 3s despues
			setTimeout(() => {
				setVerified(true);
			}, 3000);
		} else {
			// llamar al login
			handleLogin();
		}
	};

	const handleLogin = () => {
		const lastPath = localStorage.getItem("lastPath") || "/";

		login(user);

		navigate(lastPath, {
			replace: true,
		});
	};

	return (
		<>
			<div className='container mt-5'>
				<HeroTitle name={"Login"} />

				<form onSubmit={handleSubmit}>
					<input
						type='text'
						className='form-control w-1/2'
						placeholder='Write your username'
						name='user'
						value={user}
						onChange={handleInputChange}
					/>

					{!verified && <p className='text-red-500 italic'> *Write a valid username </p>}

					<button className='btn btn-outline-light w-1/5 mt-3'>Login</button>
				</form>
			</div>
		</>
	);
};

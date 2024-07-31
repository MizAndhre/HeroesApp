import { useState } from "react";

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	// const { username, email, password } = formState;

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		handleInputChange,
		handleResetForm,
	};
};

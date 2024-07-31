/* eslint-disable react/prop-types */

export const Alert = ({ type, text }) => {
	return (
		<>
			{type === "search" ? (
				<div className='alert alert-warning mt-2 text-center w-3/5'>Searh a Hero</div>
			) : type === "error" ? (
				<div className='alert alert-danger mt-2 text-center w-3/5'>No Hero with {text}</div>
			) : (
				<></>
			)}
		</>
	);
};

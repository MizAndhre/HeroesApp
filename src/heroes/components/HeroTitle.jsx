/* eslint-disable react/prop-types */
export const HeroTitle = ({ name }) => {
	return (
		<>
			<h1 className='text-4xl mt-10 pb-3 font-bold sm:text-5xl animate__animated animate__fadeInLeft capitalize'>
				{name}
			</h1>
			<hr className='bg-neutral-100 mb-4' />
		</>
	);
};

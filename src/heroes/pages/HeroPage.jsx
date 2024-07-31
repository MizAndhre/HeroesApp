import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroTitle } from "../components/HeroTitle";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
	// const params = useParams();
	const { id } = useParams();

	// cambio en algun componente =>
	// const hero = getHeroById(id);
	const hero = useMemo(() => getHeroById(id), [id]);

	const { superhero, alter_ego, characters, first_appearance, publisher } = hero;

	const navigate = useNavigate();
	const handleReturn = () => {
		navigate(-1);
	};

	if (!hero) return <Navigate to={"/marvel"} />;

	return (
		<>
			<div className='mt-16'>
				<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
					<img
						src={`../../../assets/heroes/${id}.jpg`}
						alt={superhero}
						className='img-thumbnail animate__animated animate__bounceInLeft animate__delay-1s'
					/>

					<div className='list-group col-span-2 animate__animated animate__fadeInUpBig'>
						<HeroTitle name={superhero} />
						<p className='list-group-item font-bold'>
							Alter Ego:
							<span className='font-normal'> {alter_ego}</span>
						</p>
						<p className='list-group-item font-bold'>
							Publisher:
							<span className='font-normal'> {publisher}</span>
						</p>
						<p className='list-group-item font-bold'>
							First Appearance:
							<span className='font-normal'> {first_appearance}</span>
						</p>

						<div className='bg-zinc-800 p-4 d-flex flex-col gap-4'>
							<h3 className='text-2xl font-bold'>Character(s)</h3>
							<p>{characters}</p>

							<button
								className='btn btn-outline-light w-1/5 font-semibold'
								onClick={handleReturn}>
								Return
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

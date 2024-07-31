/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
	// if (alter_ego === characters) return <></>;
	// return <p className='mb-3 text-stone-400'> {characters} </p>;

	return alter_ego === characters ? (
		<></>
	) : (
		<p className='mb-3 text-stone-400 truncate'> {characters} </p>
	);
};

export const HeroCard = ({ hero }) => {
	const { id, superhero, alter_ego, characters, first_appearance } = hero;

	return (
		<>
			<div className='col hover:scale-105  '>
				<div className='card border-2 border-stone-400 overflow-hidden text-white bg-zinc-800 h-100 hover:shadow-lg hover:shadow-stone-500 max-w-[540px]'>
					<img
						src={`/assets/heroes/${id}.jpg`}
						alt={superhero}
						className='card-img-top'
					/>

					<div className='card-body'>
						<h4 className='card-title font-bold text-2xl'>{superhero}</h4>
						<p className='card-text my-2'>{alter_ego}</p>

						<CharactersByHero
							characters={characters}
							alter_ego={alter_ego}
						/>
					</div>

					{/* <div className='card-footer hover:bg-slate-200'> */}
					<Link
						to={`/hero/${id}`}
						className='card-footer hover:bg-zinc-700 text-red-400 font-semibold cursor-pointer '>
						More Info...
					</Link>
					{/* </div> */}

					<div className='card-footer'>
						<span className='text-stone-500 text-md'> {first_appearance} </span>
					</div>
				</div>
			</div>
		</>
	);
};

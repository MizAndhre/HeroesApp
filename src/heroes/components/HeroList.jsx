import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

// eslint-disable-next-line react/prop-types
export const HeroList = ({ publisher }) => {
	// const heroes = getHeroesByPublisher(publisher);

	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<>
			<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5  g-4 mb-12 animate__animated animate__fadeInUp'>
				{heroes.map((hero) => (
					<HeroCard
						key={hero.id}
						hero={hero}
					/>
				))}
			</div>
		</>
	);
};

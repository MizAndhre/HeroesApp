import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
	const validPublishers = ["DC Comics", "Marvel Comics"];

	if (!validPublishers.includes(publisher)) {
		throw new Error("No es un publisher valido", publisher);
	}

	return heroes.filter((heroe) => heroe.publisher === publisher);
};

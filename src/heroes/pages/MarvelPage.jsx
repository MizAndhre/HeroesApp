import { HeroList } from "../components/HeroList";
import { HeroTitle } from "../components/HeroTitle";

export const MarvelPage = () => {
	return (
		<>
			<HeroTitle name={"Marvel Heroes"} />

			<HeroList publisher={"Marvel Comics"} />
		</>
	);
};

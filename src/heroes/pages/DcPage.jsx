import { HeroList } from "../components/HeroList";
import { HeroTitle } from "../components/HeroTitle";

export const DcPage = () => {
	return (
		<>
			<HeroTitle name={"DC Heroes"} />

			<HeroList publisher={"DC Comics"} />
		</>
	);
};

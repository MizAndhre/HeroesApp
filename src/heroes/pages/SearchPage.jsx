import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";

import { HeroCard } from "../components/HeroCard";
import { HeroTitle } from "../components/HeroTitle";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { Alert } from "../components/Alert";

export const SearchPage = () => {
	const navigate = useNavigate();

	const location = useLocation();
	// const query = queryString.parse(location.search);
	const { q = "" } = queryString.parse(location.search);
	const heroes = getHeroesByName(q);

	const { searchText, handleInputChange } = useForm({
		searchText: q,
	});

	const showSearch = q.length === 0;
	const showError = q.length > 0 && heroes.length === 0;

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		// if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<div className='mt-16'>
				<div className='grid gap-5 grid-cols-1 lg:grid-cols-3'>
					{/* Right Side */}
					<div>
						<HeroTitle name={"Search"} />

						<div className='animate__animated animate__fadeIn animate__delay-1s '>
							<form
								onSubmit={handleSearchSubmit}
								className='flex flex-col md:flex-row gap-2'>
								<input
									className='form-control lg:w-4/5 '
									type='text'
									placeholder='Search a hero'
									autoComplete='off'
									name='searchText'
									value={searchText}
									onChange={handleInputChange}
								/>
								<button className='btn btn-outline-light lg:w-1/5'>Search</button>
							</form>
						</div>
					</div>

					{/* Left Side */}
					<div className='font-semibold lg:col-span-2 lg:mt-10'>
						<h3 className='text-4xl pb-3 font-bold sm:text-5xl animate__animated animate__fadeInLeft capitalize  '>
							Results
						</h3>
						<hr className='bg-neutral-100 mb-4' />

						<div className='flex flex-col justify-center items-center'>
							<Alert type={showSearch && "search"} />
							<Alert
								type={showError && "error"}
								text={q}
							/>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 mt-4 gap-3 animate__animated animate__fadeInRight'>
							{heroes.map((hero) => (
								<HeroCard
									key={hero.id}
									hero={hero}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

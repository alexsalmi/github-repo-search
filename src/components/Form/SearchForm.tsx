import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";
import { ISearchForm } from "../../types/form";
import { filterOptions, orderOptions, perPageOptions, searchOptions, sortOptions } from "../../constants/options";
import '../../styles/form.css';

interface ISearchFormProps {
	search: (event: React.FormEvent<HTMLFormElement>, formValues: ISearchForm) => Promise<void>
}

/**
 * The form which the user will fill out to search for the GitHub repositories.
 * 
 * @prop {function} search Function to call the GitHub search API
 */
const SearchForm = ({search}: ISearchFormProps) => {
	const [formValues, setFormValues] = useState({
		owner: '',
		searchBy: searchOptions[0].value,
		sort: sortOptions[0].value,
		order: orderOptions[0].value,
		filter: filterOptions[0].value,
		perPage: perPageOptions[0].value,
		page: 1,
	} as ISearchForm)

	return (
		<form 
			className="form-container"
			onSubmit={(e) => search(e, formValues)}
			aria-label="search-form"
		>
			<SearchBar formValues={formValues} setFormValues={setFormValues}  />
			<SearchOptions formValues={formValues} setFormValues={setFormValues} />
		</form>
	)
}

export default SearchForm;
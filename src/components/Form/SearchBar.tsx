import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ISearchForm } from "../../types/form"

interface ISearchBarProps {
	formValues: ISearchForm,
	setFormValues: React.Dispatch<React.SetStateAction<ISearchForm>>
}

/**
 * The search bar where the user will enter the repo owner they're searching for.
 * Also includes submit button to initiate the search
 * 
 * @prop {ISearchForm} formValues The state variable for values included in the search form
 * @prop {function} setFormValues Function to update the state formValues
 */
const SearchBar = ({formValues, setFormValues}: ISearchBarProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			owner: event.target.value
		})
	}

	return (
		<section 
			className="form-search-bar"
			aria-label="search-bar"
		>
			<TextField 
				fullWidth
				aria-label="repo-owner-text-input"
				id="repo-owner-text-input"
				label="Repository Owner"
				variant="outlined" 
				value={formValues.owner} 
				onChange={handleChange}
			/>
			<Button 
				type="submit" 
				variant="outlined"
				aria-label="form-submit-button"
				aria-roledescription='form-submit-button'
			>
				Search
			</Button>
		</section>
	)
}

export default SearchBar
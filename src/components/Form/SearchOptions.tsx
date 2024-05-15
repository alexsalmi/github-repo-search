import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { searchOptions, filterOptions, sortOptions, perPageOptions, orderOptions } from '../../constants/options';
import { ISearchForm } from '../../types/form';

interface ISearchOptionsProps {
	formValues: ISearchForm,
	setFormValues: React.Dispatch<React.SetStateAction<ISearchForm>>
}

/**
 * The menu of options where the user can refine their search.
 * 
 * @prop {ISearchForm} formValues The state variable for values included in the search form
 * @prop {function} setFormValues Function to update the state formValues
 */
const SearchOptions = ({formValues, setFormValues}: ISearchOptionsProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent, field: string) => {
		setFormValues({
			...formValues,
			[field]: event.target.value as string
		})
	}

	return (
		<section 
			className="form-options"
			aria-label="search-options"
		>
			{/* 'Search by' Radio group Input */}
			<FormControl>
				<FormLabel id="search-by-radio-buttons-group-label">Search by</FormLabel>
				<RadioGroup
					aria-labelledby="search-by-radio-buttons-group-label"
					aria-label="search-by-radio-buttons-group"
					name="search-by-radio-buttons-group"
					value={formValues.searchBy}
					onChange={(e) => handleChange(e, 'searchBy')}
				>
					{searchOptions.map(option => 
						<FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
					)}
				</RadioGroup>
			</FormControl>

			<section className="form-options-section">
				{/* 'Sort by' Select Input */}
				<FormControl>
					<InputLabel id="sort-by-select-label">Sort by</InputLabel>
					<Select
						label="Sort by"
						aria-label="sort-by-select"
						aria-labelledby="sort-by-select-label"
						id="sort-by-select"
						value={formValues.sort}
						onChange={(e) => handleChange(e, 'sort')}
					>
						{sortOptions.map((option) => 
							<MenuItem key={option.value} value={option.value} data-testid={`sort-by-${option.value}`}>{option.label}</MenuItem>
						)}
					</Select>
				</FormControl>

				{/* 'Order by' Radio group Input */}
				<FormControl>
					<FormLabel id="order-by-radio-buttons-group-label">Order by</FormLabel>
					<RadioGroup
						row
						aria-labelledby="order-by-radio-buttons-group-label"
						aria-label="order-by-radio-buttons-group"
						name="order-by-radio-buttons-group"
						value={formValues.order}
						onChange={(e) => handleChange(e, 'order')}
					>
						{orderOptions.map(option => 
							<FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
						)}
					</RadioGroup>
				</FormControl>
			</section>
			
			<section className="form-options-section">
				{/* 'Filter by' Select Input */}
				<FormControl>
					<InputLabel id="filter-by-select-label">Filter by</InputLabel>
					<Select
						label="Filter by"
						aria-label="filter-by-select"
						aria-labelledby="filter-by-select-label"
						id="filter-by-select"
						value={formValues.filter}
						onChange={(e) => handleChange(e, 'filter')}
					>
						{filterOptions.map((option) => 
							<MenuItem key={option.value} value={option.value} data-testid={`filter-by-${option.value}`}>{option.label}</MenuItem>
						)}
					</Select>
				</FormControl>
				
				{/* 'Results per page' Select Input */}
				<FormControl>
					<InputLabel id="per-page-select-label">Results</InputLabel>
					<Select
						label="Filter by"
						aria-label="per-page-select"
						aria-labelledby="per-page-select-label"
						id="per-page-select"
						value={formValues.perPage}
						onChange={(e) => handleChange(e, 'perPage')}
					>
						{perPageOptions.map((option) => 
							<MenuItem key={option.value} value={option.value} data-testid={`per-page-${option.value}`}>{option.label}</MenuItem>
						)}
					</Select>
				</FormControl>
			</section>
		</section>
	)
}

export default SearchOptions;
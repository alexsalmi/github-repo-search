import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface IPaginationProps {
	pages: number,
	search: (page: number) => Promise<void>
}

/**
 * Pagination controls to see different pages of results
 * 
 * @prop {number} pages The total number of pages available for this data set
 * @prop {function} search Function to call the GitHub search API
 */
const SelectPage = ({pages, search}: IPaginationProps) => {
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		event.preventDefault();
		search(value);
	}

	return (
		<section className='select-page-container'>
			<Stack spacing={2}>
				<Pagination count={pages} defaultPage={1} onChange={handleChange} />
			</Stack>
		</section>
	)
}

export default SelectPage
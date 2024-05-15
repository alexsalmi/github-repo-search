import { SearchResponseData } from "../../types/api"
import ReposTable from "./ReposTable"
import SelectPage from "./SelectPage"
import '../../styles/repositories.css'

interface IRepositoriesProps {
	data: SearchResponseData,
	search: (page: number) => Promise<void>
}

/**
 * Displays the list of repositories returned by the GitHub API
 * 
 * @prop {SearchResponseData} data The data returned by the GitHub API
 * @prop {function} search Function to call the GitHub search API
 */
const Repositories = ({data, search}: IRepositoriesProps) => {
	const pages = Math.max(Math.ceil(data.total_count/data.items.length), 1)

	return (
		<section className="table-container" aria-label="table-container">
			<ReposTable data={data.items}/>
			<SelectPage pages={pages} search={search} />
		</section>
	)
}

export default Repositories;
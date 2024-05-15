import { useState } from "react";
import { SearchRequest, SearchResponseData } from "../types/api"
import { ISearchForm } from "../types/form";
import searchGithub from "../api/searchGithub";

/**
 * Custom Hook to keep track of the GitHub API request state. 
 * Allows user to easily search for a new page of the previous data set .
 */
const useGithubApi = () => {
	// Store the request body in state, so it can be re-used if user requests a new page
	const [request, setRequest] = useState({
		q: ''
	} as SearchRequest);

	// Searches the GitHub API using a new request body
	const getRepositories = async (formData: ISearchForm): Promise<SearchResponseData> => {
		let query = formData.searchBy === "user" ?
			`user:${formData.owner}` :
			`org:${formData.owner}`;
		
		if(formData.filter !== "all")
			query += `+is:${formData.filter}`;	

		const newRequest = {
			q: query,
			sort: formData.sort,
			order: formData.order,
			per_page: parseInt(formData.perPage),
			page: 1
		};

		setRequest(newRequest);
	
		return await searchGithub(newRequest);
	};

	// Searches the GitHub API for a new page re-using the previous request body
	const getNewPage = async (page: number): Promise<SearchResponseData> => {
		const newRequest = {
			...request,
			page
		};

		setRequest(newRequest);

		return await searchGithub(newRequest);	
	}

	return {
		getRepositories,
		getNewPage
	}
}

export default useGithubApi;
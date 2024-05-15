import { Octokit } from "octokit";
import { SearchResponseData, SearchRequest } from "../types/api";
const octokit = new Octokit({ });

// Stub empty response in case the api returns an error
const emptyResponse: SearchResponseData = {
	total_count: 0,
	incomplete_results: false,
	items: []
};

/**
 * Calls the GitHub repository API using the Octokit SDK
 * Request/response definitions can be found at https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
 * 
 * @param {SearchRequest} request The request body for searching repositories
 * @returns {Promise<SearchResponseData>} List of repository details, including total number of repos matching the query, as well as wether the results are incomplete
 */
const searchGithub = async (request: SearchRequest): Promise<SearchResponseData> => {
	return new Promise((resolve) => {
		octokit.request('GET /search/repositories', request)
		.then(response => {
			resolve(response.data);
		})
		.catch(err => {
			console.error(`Error fetching data: ${err}`);
			resolve(emptyResponse);
		});
	})
};

export default searchGithub;
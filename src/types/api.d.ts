
import { Endpoints } from "@octokit/types";

// Request/response types defined by GitHub at https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
type SearchResponse = Endpoints["GET /search/repositories"]["response"];
type SearchRequest = Endpoints["GET /search/repositories"]["parameters"];
type SearchResponseData = Endpoints["GET /search/repositories"]["response"]["data"];
type Repository = Endpoints["GET /search/repositories"]["response"]["data"]["items"][0];

// Types for the options shown in our page's form
type SearchType = "users" | "orgs";
type SearchFilter = "all" | "private" | "public" | "archived";
type SearchSort = "stars" | "forks" | "help-wanted-issues" | "updated" | undefined;
type SearchOrder = "asc" | "desc";
type SearchPerPage = "10" | "25" | "50";

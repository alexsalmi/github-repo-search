import { useState } from "react";
import { SearchResponseData } from "../types/api";
import { ISearchForm } from "../types/form";
import SearchForm from "./Form/SearchForm";
import useGithubApi from "../hooks/useGithubApi";
import Repositories from "./Repositories/Repositories";
import errors from "../constants/errors";
import '../styles/App.css';

function App() {
  // Use custom GitHub API hook to initialize the results state
  const { getRepositories, getNewPage } = useGithubApi();

  const [data, setData] = useState({} as SearchResponseData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handles when user clicks Search button, and calls GitHub API
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: ISearchForm) => {
    event.preventDefault();

    // Displays error if no owner value was entered
    if(!formData.owner){
      setError(errors.INVALID_INPUT);
      return;
    }      

    setError("");
    setLoading(true);
    const results = await getRepositories(formData);
    setLoading(false);

    processResults(results);
  }

  // Handles when user selects a new page on an existing data set, and calls GitHub API
  const handleNewPage = async (page: number) => {
    setError("");
    setLoading(true);
    const results = await getNewPage(page);
    setLoading(false);

    processResults(results);
  }

  // Processes the response from the GitHub API
  const processResults = (results: SearchResponseData) => {
    if(results.total_count === 0)
      setError(errors.NO_RESULTS);

    setData(results);
  }

  return (
    <main>
      <h1 aria-label="heading">Github Repo Search</h1>
      <SearchForm search={handleSubmit}/>
      {data.items?.length > 0 &&
        <Repositories search={handleNewPage} data={data} />
      }
      {loading && 
        <p aria-label="loading-message">Loading...</p>
      }
      {error && 
        <p aria-label="error-message">{error}</p>
      }
    </main>
  )
}

export default App

import { SearchOrder } from "./api"

// Interface for the options shown in our page's form
interface ISearchForm {
  owner: string
  searchBy: SearchType
  sort: SearchSort
  order: SearchOrder
  filter: SearchFilter
  perPage: SearchPerPage
  page: SearchPage
}

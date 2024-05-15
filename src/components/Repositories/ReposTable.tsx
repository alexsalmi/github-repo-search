import { Repository } from "../../types/api"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface IReposTableProps {
	data: Repository[]
}

/**
 * Table which displays the list of repositories returned by the GitHub API
 * 
 * @prop {Repository[]} data The list of repositories returned by the GitHub API
 */
const ReposTable = ({data}: IReposTableProps) => {
	return (
    <TableContainer component={Paper}>
      <Table aria-label="repositories-table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Stars</TableCell>
            <TableCell align="right">Forks</TableCell>
            <TableCell align="right">Updated</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              className="table-row"
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">{row.stargazers_count}</TableCell>
              <TableCell align="right">{row.forks_count}</TableCell>
              <TableCell align="right">{new Date(row.updated_at).toDateString()}</TableCell>
              <TableCell align="right">
                <a href={row.html_url}>
                  <OpenInNewIcon/>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	)
}

export default ReposTable
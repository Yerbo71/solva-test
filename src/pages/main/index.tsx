import Header from '../../widgets/header';
import { Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import FetchList from '../../features/api';

const Main = () => {
  const { items, page, totalPages, setPage, error, loading } = FetchList({ type: 'people' });
  const { enqueueSnackbar } = useSnackbar();
  return (
    <>
      <Header />
      <Box>
        <Typography variant="h3">People List</Typography>
        <ul>
          {items.map((person, index) => (
            <li key={index}>
              {person.name} - {person.height} cm
            </li>
          ))}
        </ul>
        <div>
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
            Previous
          </button>
          <span>
            {' '}
            Page {page} of {totalPages}{' '}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </Box>
    </>
  );
};

export default Main;

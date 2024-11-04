import Header from '../../widgets/header';
import { Box, CircularProgress, Container, Pagination, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import FetchList from '../../features/api/fetchItems.tsx';
import ItemCard from '../../shared/itemCard';

const Main = () => {
  const { items, page, totalPages, setPage, error, loading } = FetchList({ type: 'people' });
  const { enqueueSnackbar } = useSnackbar();
  if (error) return enqueueSnackbar(error, { variant: 'error' });
  if (loading) return <CircularProgress />;
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingY={2}
          gap="15px"
        >
          <Typography variant="h4">People List</Typography>
          <Box
            display="flex"
            gap="15px"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            {items.map((person, index) => (
              <ItemCard key={`person-${index}`} data={person} />
            ))}
          </Box>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Container>
    </>
  );
};

export default Main;

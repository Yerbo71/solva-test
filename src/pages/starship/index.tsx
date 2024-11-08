import Header from '../../widgets/header';
import { Box, CircularProgress, Container, Pagination, Typography } from '@mui/material';
import FetchList from '../../features/api/fetchItems/fetchItems.tsx';
import { useSnackbar } from 'notistack';
import ItemCard from '../../shared/itemCard';

const Starship = () => {
  const { items, page, totalPages, setPage, error, loading } = FetchList({ type: 'starships' });
  const { enqueueSnackbar } = useSnackbar();
  if (error) return enqueueSnackbar(error);
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
          <Typography variant="h4">Planet List</Typography>
          <Box
            display="flex"
            gap="15px"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            {items.map((starship, index) => (
              <ItemCard key={`person-${index}`} data={starship} />
            ))}
          </Box>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(value) => setPage(value)}
            color="primary"
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </Container>
    </>
  );
};

export default Starship;

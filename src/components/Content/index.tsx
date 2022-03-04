import { Grid } from '@chakra-ui/react';
import Bio from './Bio';
import Infos from './Infos';

export function Content() {
  return (
    <Grid
      gridTemplateColumns={['1fr', '1fr', '1fr', '1.3fr 1fr']}
      gap={['1rem', '2rem', '2rem', '4.375rem']}
      px="1rem"
    >
      <Bio />
      <Infos />
    </Grid>
  );
}

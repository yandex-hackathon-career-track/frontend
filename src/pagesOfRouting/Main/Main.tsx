import { FC } from 'react';
import CandidatePreviewCard from '../../components/CandidatePreviewCard/CandidatePreviewCard';
import { Grid } from '@mui/material';

const Main: FC = () => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={4}>
        <CandidatePreviewCard
          name={'Александр Александров'}
          isAvailable={true}
          isFavorite={true}
          position={'UI/UX Designer'}
          graduated={'октябрь 2020'}
          experience={3}
          stack={['Figma', 'Adobe', 'CSS']}
        />
      </Grid>
      <Grid item xs={4}>
        <CandidatePreviewCard
          name={'Мария Петрова'}
          isAvailable={true}
          isFavorite={false}
          position={'Front-end Developer'}
          graduated={'сентябрь 2020'}
          experience={1}
          stack={['HTML', 'JavaScript', 'CSS']}
        />
      </Grid>
      <Grid item xs={4}>
        <CandidatePreviewCard
          name={'Петр Петров '}
          isAvailable={false}
          isFavorite={false}
          position={'Back-end Developer'}
          graduated={'декабрь 2020'}
          experience={3}
          stack={['Python', 'Express.js', 'Java']}
        />
      </Grid>
    </Grid>
  );
};

export default Main;

import { FC } from 'react';
import { Card, CardActions, Typography, Button, IconButton } from '@mui/material';
import { ProfileHeader } from '../../ProfileHeader/ProfileHeader';
import { ICandidate } from '../../../services/types/Interfaces';
import { ProfileStackField } from '../../ProfileStackField/ProfileStackField';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from './styles.module.css';

export const CandidateCard: FC<ICandidate> = (props) => {
  return (
    <Card className={styles.container}>
      <ProfileHeader {...props} />
      <Typography className={styles.heading}>Стаж и образование</Typography>
      <div>
        <label className={styles.text}>
          Опыт:<span>{` ${props.experience}`}</span>
        </label>
        <ul className={styles.list}>
          <li>
            <p className={styles.text}>Графический дизайнер(2 года и 5 месяцев)</p>
          </li>
        </ul>
        <label className={styles.text}>Курсы:</label>
        <ul className={styles.list}>
          <li>
            <p className={styles.text}>Ускоренный онлайн-бакалавриат «Фронтенд и мобильная разработка» ИТМО</p>
          </li>
        </ul>
        <ProfileStackField stack={props.stack} />
      </div>
      <div>
        <Typography className={styles.heading}>Формат работы и город</Typography>
        <Typography className={styles.text}>
          Формат работы:&nbsp;{props.jobFormat?.map((item, index, arr) => item + (index !== arr.length - 1 ? '/' : ''))}
        </Typography>
        <Typography className={styles.text}>{`Город: ${props.city}`}</Typography>
      </div>
      <div>
        <Typography className={styles.heading}>Портфолио и сертификаты</Typography>
      </div>
      <div>
        <Typography className={styles.heading}>Контакты</Typography>
      </div>
      <CardActions>
        <Button>Скачать резюме</Button>
        <IconButton aria-label="add to favorites" sx={{ padding: 0, color: '#1D6BF3' }}>
          {props.isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

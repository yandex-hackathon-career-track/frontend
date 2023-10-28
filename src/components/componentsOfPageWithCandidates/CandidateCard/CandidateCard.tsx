import { FC } from 'react';
import { Card, CardActions, Typography, IconButton, Link, List } from '@mui/material';
import { ProfileHeader } from '../../ProfileHeader/ProfileHeader';
import { ICandidate } from '../../../services/types/Interfaces';
import { ProfileStackField } from '../../ProfileStackField/ProfileStackField';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from './styles.module.css';
import porfolioIcon from '../../../media/portfolio-icon.svg';
import { CustomButton } from '../../../UI/CustomButton/CustomButton';
import { Location } from 'react-router-dom';

interface ICandidateCard extends ICandidate {
  location?: Location<unknown>;
  isPopup?: boolean;
  handleAddToCompareClick?: () => void;
  btnAddToCompareText?: string;
}

export const CandidateCard: FC<ICandidateCard> = (props) => {
  const {
    experience,
    schedule,
    stack,
    jobFormat,
    city,
    portfolio,
    certificates,
    tg,
    email,
    isPopup = false,
    handleAddToCompareClick = () => null,
    btnAddToCompareText = 'Добавить к сравнению',
  } = props;
  return (
    <Card className={isPopup ? styles['container-in-popup'] : styles.container}>
      <ProfileHeader {...props} />
      <Typography className={styles.heading}>Стаж и образование</Typography>
      <div>
        <label className={styles.text}>
          Опыт:<span>{` ${experience}`}</span>
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
        <ProfileStackField stack={stack} />
      </div>
      <Typography className={styles.heading}>Формат работы и город</Typography>
      <div className={styles.jobInfo}>
        <Typography className={styles.text}>
          Формат работы:&nbsp;{jobFormat?.map((item, index, arr) => item + (index !== arr.length - 1 ? '/' : ''))}
        </Typography>
        <Typography className={styles.text}>
          Занятость:&nbsp;{schedule?.map((item, index, arr) => item + (index !== arr.length - 1 ? '/' : ''))}
        </Typography>
        <Typography className={styles.text}>{`Город: ${city}`}</Typography>
      </div>
      <div>
        <Typography className={styles.heading}>Портфолио и сертификаты</Typography>
        <List className={styles.portfolio}>
          {portfolio?.map((item, index) => (
            <li key={index}>
              <Link className={styles.link} href={item.link} target="_blanc">
                {item.name}
              </Link>
            </li>
          ))}
        </List>
        <List className={styles.portfolio}>
          {certificates?.map((item, index) => (
            <li key={index}>
              <Link className={styles.link} href={item.link} target="_blanc">
                <img
                  src={item.thumbnail ? item.thumbnail : porfolioIcon}
                  alt="превью страницы портфолио"
                  style={{ borderRadius: '8px' }}
                />
              </Link>
            </li>
          ))}
        </List>
      </div>
      <div>
        <Typography className={styles.heading}>Контакты</Typography>
        <List className={styles.contacts}>
          {tg && (
            <li>
              <Link className={styles.link} href={`https://t.me/${tg.slice(1)}`} target="_blanc">
                <div className={styles.tg}></div>
                <div>{tg}</div>
              </Link>
            </li>
          )}
          {email && (
            <li>
              <Link className={styles.link} href={`mailto:${email}`} target="_blanc">
                <div className={styles.email}></div>
                <div>{email}</div>
              </Link>
            </li>
          )}
        </List>
      </div>
      <CardActions className={styles.cardActions}>
        <CustomButton text={'Скачать резюме'} variant={'filled'} />
        {location.pathname === '/candidates' || location.pathname === '/vacancy' ? (
          <IconButton aria-label="add to favorites" sx={{ padding: 0, color: '#1D6BF3' }}>
            {props.isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        ) : (
          <CustomButton text={btnAddToCompareText} variant={'outlined'} onClick={handleAddToCompareClick} />
        )}
      </CardActions>
    </Card>
  );
};

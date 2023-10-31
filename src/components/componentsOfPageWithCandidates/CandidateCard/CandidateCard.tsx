import { FC, useEffect, useState } from 'react';
import { Card, CardActions, Typography, Link, List } from '@mui/material';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { ProfileStackField } from '../ProfileStackField/ProfileStackField';
import styles from './styles.module.css';
import porfolioIcon from '../../../media/portfolio-icon.svg';
import { CustomButton } from '../../CustomButton/CustomButton';
import { Location } from 'react-router-dom';
import { IApplicantsToDetail } from '../../../services/types/types';
import BtnChangeIsSelected from '../BtnChangeIsSelected/BtnChangeIsSelected';
import { useDownloadResumeMutation } from '../../../services/query/practicumApi';

interface ICandidateCard extends IApplicantsToDetail {
  location?: Location<unknown>;
  isPopup?: boolean;
  handleAddToCompareClick?: () => void;
  btnAddToCompareText?: string;
  certificates?: { link: string; thumbnail: string }[];
}

export const CandidateCard: FC<ICandidateCard> = (props) => {
  const [downloadResume] = useDownloadResumeMutation();
  const {
    total_experience: experience,
    occupation: schedule,
    stack,
    work_format: jobFormat,
    city,
    portfolio_links: portfolio,
    contact,
    isPopup = false,
    certificates = [],
    handleAddToCompareClick = () => null,
    btnAddToCompareText = 'Добавить к сравнению',
    is_selected,
    id,
    applicant_courses,
  } = props;

  // костыль
  const [isFavorite, setIsFavorite] = useState(is_selected);

  // костыль
  useEffect(() => {
    setIsFavorite(is_selected);
  }, [is_selected]);
  return (
    <Card className={isPopup ? styles['container-in-popup'] : styles.container}>
      <ProfileHeader
        name={`${props.first_name} ${props.last_name}`}
        position={props.direction?.name || '-'}
        lastSeen={props.updated_at}
        isAvailable={props.status.name}
      />
      <Typography className={styles.heading}>Стаж и образование</Typography>
      <div>
        <label className={styles.text}>
          Опыт (мес):<span>{` ${experience}`}</span>
        </label>
        <ul className={styles.list}>
          {props.educations.map((item, i) => {
            return (
              <li key={i}>
                <p className={styles.text}>{item.name}</p>
              </li>
            );
          })}
        </ul>
        <label className={styles.text}>Курсы:</label>
        <ul className={styles.list}>
          {applicant_courses.map((item, i) => {
            return (
              <li key={i}>
                <p className={styles.text}>{item.course}</p>
              </li>
            );
          })}
        </ul>
        <ProfileStackField stack={stack} />
      </div>
      <Typography className={styles.heading}>Формат работы и город</Typography>
      <div className={styles.jobInfo}>
        <Typography className={styles.text}>
          Формат работы:&nbsp;{jobFormat?.map((item, index, arr) => item.name + (index !== arr.length - 1 ? '/' : ''))}
        </Typography>
        <Typography className={styles.text}>
          Занятость:&nbsp;{schedule?.map((item, index, arr) => item.name + (index !== arr.length - 1 ? '/' : ''))}
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
          {contact.telegram && (
            <li>
              <Link className={styles.link} href={`https://t.me/${contact.telegram.slice(1)}`} target="_blanc">
                <div className={styles.tg}></div>
                <div>{contact.telegram}</div>
              </Link>
            </li>
          )}
          {contact.email && (
            <li>
              <Link className={styles.link} href={`mailto:${contact.email}`} target="_blanc">
                <div className={styles.email}></div>
                <div>{contact.email}</div>
              </Link>
            </li>
          )}
        </List>
      </div>
      <CardActions className={styles.cardActions}>
        <CustomButton text={'Скачать резюме'} variant={'filled'} onClick={() => void downloadResume(id)} />
        {location.pathname === '/candidates' || location.pathname === '/vacancy' ? (
          <BtnChangeIsSelected is_selected={isFavorite} id={id} setState={setIsFavorite} />
        ) : (
          <CustomButton text={btnAddToCompareText} variant={'outlined'} onClick={handleAddToCompareClick} />
        )}
      </CardActions>
    </Card>
  );
};

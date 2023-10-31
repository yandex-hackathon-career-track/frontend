import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { changeFavoriteStatus } from '../../../services/features/applicantsSlice';
import {
  useAddApplicantToFavoriteMutation,
  useDelApplicantFromFavoriteMutation,
} from '../../../services/query/practicumApi';
import { useDispatch } from '../../../services/hooks';
import styles from './BtnChangeIsSelected.module.css';

interface IBtnChangeIsSelected {
  is_selected: boolean;
  id: string;
  setState?: (newVal: boolean) => void;
  handleChangeIsFavorite?: (status: boolean, id: string) => void;
}

const BtnChangeIsSelected = ({
  is_selected,
  id,
  setState = () => null,
  handleChangeIsFavorite = () => null,
}: IBtnChangeIsSelected) => {
  const [addApplicantToFavorite, { isLoading: isLoadingAdd, isSuccess: isSuccessAdd, isError: isErrorAdd }] =
    useAddApplicantToFavoriteMutation();
  const [delApplicantFromFavorite, { isLoading: isLoadingDel, isSuccess: isSuccessDel, isError: isErrorDel }] =
    useDelApplicantFromFavoriteMutation();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    is_selected ? void delApplicantFromFavorite(id) : void addApplicantToFavorite(id);
  };

  useEffect(() => {
    if (!isLoadingAdd && isSuccessAdd) {
      setState(true); //костыль сложности связи объектов
      handleChangeIsFavorite(true, id); //костыль сложности связи объектов
      dispatch(changeFavoriteStatus({ id: id, value: true }));
    } else if (!isLoadingAdd && isErrorAdd) {
      // TODO поправить на попап
      console.log('Ошибка получения данных');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingAdd, isSuccessAdd, isErrorAdd, id, dispatch]);

  useEffect(() => {
    if (!isLoadingDel && isSuccessDel) {
      setState(false); //костыль сложности связи объектов
      handleChangeIsFavorite(false, id); //костыль сложности связи объектов
      dispatch(changeFavoriteStatus({ id: id, value: false }));
    } else if (!isLoadingDel && isErrorDel) {
      // TODO поправить на попап
      console.log('Ошибка получения данных');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingDel, isSuccessDel, isErrorDel, id, dispatch]);

  return (
    <IconButton
      aria-label="add to favorites"
      sx={{ padding: 0, color: '#1D6BF3' }}
      className={styles.favorite}
      onClick={(e) => {
        e.stopPropagation();
        handleCardClick();
      }}
    >
      {is_selected ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );
};

export default BtnChangeIsSelected;

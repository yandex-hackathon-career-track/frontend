import FileSaver from 'file-saver';
import { BASE_URL } from '../helpers/constants';
import { getCookie } from './cookieApi';

const handleErrorFetch = (promise: Promise<void | Blob>) => {
  promise.catch((err) => {
    console.error('Произошла ошибка:' + err);
  });
};

const handleResponse = (res: Response, errMsg: string) => {
  if (res.ok) return res.blob();
  throw new Error(errMsg);
};

export const downloadResumeAll = () => {
  const queryPath = '/applicants/download_report/';
  handleErrorFetch(
    fetch(BASE_URL + queryPath, {
      headers: {
        Authorization: `JWT ${getCookie('access')}`,
      },
    })
      .then((res) => handleResponse(res, 'не удалось скачать все резюме'))
      .then((blob) => FileSaver.saveAs(blob, 'All_Resums.xlsx')),
  );
};

export const downloadResumeToId = (id: string, name?: string | undefined) => {
  const fileName = name?.split(' ').join('_') || id;
  const queryPath = `/applicants/${id}/generate_pdf/`;

  handleErrorFetch(
    fetch(BASE_URL + queryPath, {
      headers: {
        Authorization: `JWT ${getCookie('access')}`,
      },
    })
      .then((res) => handleResponse(res, 'не удалось скачать выбранное резюме'))
      .then((blob) => FileSaver.saveAs(blob, `Resumе_${fileName}.pdf`)),
  );
};

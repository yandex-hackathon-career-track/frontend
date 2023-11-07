# YANDEX HACKATHON: Внутренний сервис для найма в Карьерном трекере. SEVEN-ELEVEN (команда 11).

http://130.193.38.88/

## BACKEND

https://github.com/yandex-hackathon-career-track/backend

## FRONTEND:

### Инструменты:

![image](https://img.shields.io/badge/React-100000?style=for-the-badge&logo=react)
![image](https://img.shields.io/badge/React_Hook_Form-100000?style=for-the-badge&logo=reacthookform)
![image](https://img.shields.io/badge/Redux_Toolkit_Query-100000?style=for-the-badge&logo=redux)
![image](https://img.shields.io/badge/Type_Script-100000?style=for-the-badge&logo=typescript)
![image](https://img.shields.io/badge/Docker-100000?style=for-the-badge&logo=docker&logoColor=white)
![image](https://img.shields.io/badge/MaterialUI-100000?style=for-the-badge&logo=mui)
![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![image](https://img.shields.io/badge/React_Router-100000?style=for-the-badge&logo=reactrouter)
![image](https://img.shields.io/badge/CSS_Modules-100000?style=for-the-badge&logo=cssmodules)
![image](https://img.shields.io/badge/Yup-100000?style=for-the-badge)


### API-документация:

http://130.193.38.88/api/schema/swagger/#/

### Screen-shots

[https://drive.google.com/file/d/1EPJfcWm_3MrQxPGyE4yqtlHsySjQKaX-/view?usp=sharing](https://drive.google.com/drive/folders/1rpjuh1Wfi4Nri09m9QbEdcUO6vVnTvTn?usp=sharing)

### Описание возможностей:

Cвёрстаны экраны:

- Вход.
- Регистрация.
- Смены пароля.
- Профиля компании.
- Создания вакансий.
- Кандидатов (соискатели).
- Избранных кандидатов.
- Вакансий (список вакансий компании).

Функциональность:

- регистрация сотрудника компании,
- вход по jwt,
- поддержание активной сессии без повтоной авторизации по jwt,
- возможность смены пароля,
- валидация input-полей,
- получение списка кандидатов с сервера,
- добавление\удаление кандидата в\из избранное\го,
- просмотр полноразмерной карточки кандидата,
- возможность получения резюме кандидата в формате PDF,
- возможность фильтровать всех кандидатов по стеку, городу, направлению, оконченным курсам, формату работы, опыту работы,
- получени списка избранных кандидатов с сервера,
- возможность фильтровать избранных кандидатов по направлению и оконченным курсам,
- возможность выгрузить в Excel формате все данные избранных кандидатов,
- возможность непосредственно на сайте сравнить интересные пользователю резюме кандидатов в формате popup-таблицы,
- возможность связаться с кандидатом одним кликом,
- возможность связаться с тех. поддержкой одним кликом.

Разрабатывается:

- интерфейс соискателя для посещения платформы (введение дополнительной роли при регистрации, дополнительный экран профиля, просмотра доступных для отклика резюме),
- рассылка уведомлений об откликах на вакансии по указанной почте,
- уведомление пользователя о событиях по "колокольчику" в углу,
- возможность загрузки нормативных документов для подтверждения статуса организации,
- возможность получать вакансии, переносить их в архив, редактировать, в актив,
- возможность фильтровать отклики по вакансиям по установленному сотрудником компании статусу,

## Запуск проекта

- git clone git@github.com:yandex-hackathon-career-track/frontend.git
- cd ./frontend
- npm i
- npm run lint-fix
- npm run dev

Для получения оптимизированной сборки (например для раздачи через nginx):

- npm run build - результат будет лежать в каталоге "dist" на корневом уровне проекта.

### Запуск с установленным Docker

- docker build -t /your-name-image/ - получите образ сборки для передачи на back-end

Для запуска непосредственно через docker потребуется модифицировать Dockerfile:

- убрать 7-ю строку
- на 6-ой вместо "build" указать "dev"

Для запуска сервера и раздачи с него сборки через docker потребуется самостоятельно настроить окружение.

## Frontend-разработчики:

[Любимов Ярослав](https://github.com/Yanseses) <br>
[Артем Никифоров](https://github.com/Art-Frich) <br>
[Влад Мещеринов](https://github.com/beardy-raccoon)

# Бэкенд дипломного проекта Яндекс.Практикума "Movies explorer"

# Описание

Проект представляет собой сайт для поиска фильмов и добавления их в собственную библиотеку.
После регистрации и авторизаци пользователи могут находить фильмы по ключевым словам, добавлять фильмы в избранное.
Есть возможность редактирования профиля пользователя.

## Основные функции

- регистрация и автроизация пользователей
- редактировние данных пользователя: электронной почты, имени профиля
- работа с карточками: добавление фильмов в избранное, избранные фильмы отображаются на странице сохранённых фильмов
- работа с внешним api, с которого загружаются данные о фильмах
- работа с БД сайта (регистрация пользователей, хранение избранных фильмов пользователей)

## Технологии

<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            width="36" height="36" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
            width="36" height="36" alt="Express" /></a>
<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
            width="36" height="36" alt="MongoDB" /></a>
<a href="https://webpack.js.org/" target="_blank" rel="noreferrer"><img
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg"
                        width="36" height="36" alt="Webpack" /></a>
<a href="https://git-scm.com/" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
                        width="36" height="36" alt="Git" /></a>

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки  
`/models` — папка с файлами описания схем пользователя и карточки

## Запуск проекта

`npm run start` — запускает сервер  
`npm run dev` — запускает сервер с hot-reload

## Ссылки на проект

Cсылка на репозиторий GitHub:
[https://github.com/AndreyKotlyarov/movies-explorer-api](https://github.com/AndreyKotlyarov/movies-explorer-api)

Cсылка для работы с api:
https://api.moviesexplorer.nomoredomains.work

Ссылка на приложение:
[https://moviesexplorer.nomoredomains.work/](https://moviesexplorer.nomoredomains.work/)

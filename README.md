# Простой API на Express.js с использованием MongoDB (mongoose)

Этот проект представляет собой базовый пример простого API, созданного с использованием фреймворка Express.js и базы данных MongoDB с помощью mongoose.

## Подготовка к запуску

1. **Установка MongoDB**
    - Убедитесь, что у вас установлена и запущена MongoDB. Если MongoDB не установлена, вы можете скачать ее с [официального сайта MongoDB](https://www.mongodb.com/try/download/community) и следовать инструкциям по установке для вашей операционной системы.

2. **Создание файла .env**
    - Создайте файл `.env` в корневой директории проекта. В этом файле будут храниться конфигурационные переменные для вашего приложения. Пример содержимого файла `.env`:

      ```dotenv
      PORT=8080
      MONGO_URL=mongodb://localhost:27017/mydatabase
      SECRET_SALT=qwe123
      ```

      Замените `PORT` и `MONGO_URL` и `SECRET_SALT` на значения, подходящие для вашей конфигурации.

3. **Установка зависимостей**
    - Откройте терминал и выполните команду для установки зависимостей проекта:

      ```bash
      npm install
      ```

4. **Запуск проекта**
    - После установки зависимостей, вы можете запустить проект с помощью следующей команды:

      ```bash
      npm start
      ```

      Приложение будет доступно по адресу [http://localhost:8080](http://localhost:8080) (или другому порту, если вы указали другое значение в файле `.env`).

## Как использовать API

В этом проекте уже реализован базовый функционал авторизации и управления учетной записью. Давайте рассмотрим, как его использовать:

### Регистрация пользователя

1. Отправьте POST-запрос на `http://localhost:<ваш порт>/auth/register` с данными пользователя в формате JSON:

   ```json
   {
     "email": "example@email.com",
     "password": "yourpassword",
     "username": "yourusername"
   }

Если все поля заполнены корректно, вы получите успешный ответ с данными нового пользователя:

   ```json
{
    "username": "yourusername",
    "email": "example@email.com",
    "authentication": {
        "password": "b07620a3fcd38c2760eefac6277aba2b1768c1a74a690c5890ffbb8377fccf7a",
        "salt": "dnjmSxQhE1AGZh9CWsUMaJzq8OeSEhIr/G/wa+eULzIcB2FrBKLpaTNr/r/LfEZyzPbC/gnwwz+ceBT3ZGhGmTLQVBisKQdc48tzSqIduj0brRs71LMNUsiptURJ6DE85OvvU/Oa+6cvygDfLfsSoz1azZbaRAuu1L1xh1IKh7Q="
    },
    "_id": "651f6725b97e00aa5c92b06e",
    "__v": 0
}

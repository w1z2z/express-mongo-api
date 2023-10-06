import express from "express";

import {deleteUser, getAllUsers, updateUser} from "../controllers/users";
import {isAuth, isOwner} from "../middlewares";

export default (router: express.Router) => {

  // При получении списка пользователей делается проверка на авторизацию
  router.get('/users', isAuth, getAllUsers);

  // При удалении пользователя делается проверка что пользователь авторизован и удаляет свою учетную запись
  router.delete('/users/:id', isAuth, isOwner, deleteUser);

  // При изменении данных пользователя делается проверка что пользователь авторизован и изменяет свою учетную запись
  router.patch('/users/:id', isAuth, isOwner, updateUser);

}

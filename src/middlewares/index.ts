import express from "express";
import { get, merge } from "lodash";

import {getUserBySessionToken} from "../db/users";

// Проверка на то что пользователь тот за кого себя выдает))) (владелец учетной записи в которую хочет внести изменения)
export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { id } = req.params;

    // Безопастное получение _id пользователя из req.identity - которое было добавлено миддлваром isAuth
    const currentUser = get(req, 'identity._id') as string;

    if (!currentUser) {
      return res.sendStatus(403);
    }

    if (currentUser.toString() !== id) {
      return res.sendStatus(403);
    }

    return next()

  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
}

// Проверка авторизации пользователя по куки отправляемых клиентом
export const isAuth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies['TESTAPI-AUTH'];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    // Добавление в запрос req данных пользователя из бд для дольнейшей проверки роли и тд
    merge(req, { identity: existingUser });

    return next()

  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
}

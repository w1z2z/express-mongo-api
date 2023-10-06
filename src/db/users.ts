import mongoose from "mongoose";

interface IUser {
  username: string,
  email: string,
  authentication: {
    password: string,
    salt: string,
    sessionToken?: string,
  }
}

// Описание схемы Пользователя
const UserSchemas = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  }
});

// Создание модели Пользователя
export const UserModel = mongoose.model('User', UserSchemas);

// Методы для модели пользователя
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
  'authentication.sessionToken': sessionToken,
});
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: IUser) => new UserModel(values)
  .save().then((user) => user.toObject());
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id })
export const updateUserById = (id: string, values: IUser) => UserModel.findByIdAndUpdate(id, values);

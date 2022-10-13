import users from '../database/';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

const createUserService = async (name, email, password, isAdm) => {
  const hashedPassword  = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    uuid: uuidv4()
  };

  users.push(newUser);

  const userApiResponse = { ...newUser };
  delete userApiResponse.password;

  return userApiResponse;
};

export default createUserService;
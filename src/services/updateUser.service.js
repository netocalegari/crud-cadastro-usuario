import users from "../database";
import * as bcrypt from 'bcryptjs';

const updateUserService = async ({uuid, name, email, password}) => {
  const userIndex = users.findIndex(user => user.uuid === uuid);

  const updatedUser = {
    name: name ? name : users[userIndex].name,
    email: email ? email : users[userIndex].email,
    password: password ? await bcrypt.hash(password, 10) : users[userIndex].password,
    updatedOn: new Date(),
  };

  users[userIndex] = {...users[userIndex], ...updatedUser};

  return users[userIndex];
};

export default updateUserService;
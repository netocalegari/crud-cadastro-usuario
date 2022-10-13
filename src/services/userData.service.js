import users from "../database";

const userDataService = (uuid) => {
  const user = users.find(user => user.uuid === uuid);

  if (!user) {
    return 'User not found';
  };

  const userApiResponse = {...user};
  delete userApiResponse.password;

  return {
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
    uuid: user.uuid,
  };
};

export default userDataService;
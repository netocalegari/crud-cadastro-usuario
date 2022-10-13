import users from "../database";
import updateUserService from "../services/updateUser.service";

const updateUserController = async (request, response) => {
  const { uuid } = request.params;
  const { name, email, password } = request.body;

  const loggedUser = users.find((user) => user.uuid === request.user.uuid);

  const userIndex = users.findIndex(user => user.uuid === uuid);
  
  if (userIndex === -1) {
    return response.status(404).json({
      message: "User not found",
    });
  };

  if (loggedUser.uuid !== uuid && !loggedUser.isAdm) {
    return response.status(401).json({
      message: "You lack admin privileges",
    });
  };

  const updatedUser = await updateUserService({ uuid, name, email, password });

  const userApiResponse = { ...updatedUser };
  delete userApiResponse.password;

  return response.json(userApiResponse);
};

export default updateUserController;
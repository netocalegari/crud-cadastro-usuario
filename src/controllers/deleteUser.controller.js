import users from "../database";
import deleteUserService from "../services/deleteUser.service";


const deleteUserController = (request, response) => {
  const { uuid } = request.params;
  const loggedUser = users.find(user => user.uuid === request.user.uuid);
  
  if (loggedUser.uuid !== uuid && !loggedUser.isAdm) {
    return response.status(401).json({
      message: 'You lack admin privileges'
    });
  };
  
  const deletedUser = deleteUserService(uuid);
  return response.status(200).json(deletedUser);
};

export default deleteUserController;
import userDataService from "../services/userData.service";

const userDataController = (request, response) => {
  const uuid = request.user.uuid;

  const user = userDataService(uuid);
  if (user === 'User not found') {
    return response.status(404).json({
      message: 'User not found'
    });
  };

  return response.json(user);
};

export default userDataController;
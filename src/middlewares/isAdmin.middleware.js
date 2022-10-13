import users from "../database";

const isAdminMiddleware = (request, response, next) => {
  const uuid = request.user.uuid;

  const user = users.find(user => user.uuid === uuid);

  if (!user) {
    return response.status(404).json({
      message: 'User not found'
    });
  };

  if (!user.isAdm) {
    return response.status(401).json({
      message: 'You lack admin privileges',
    });
  };

  next();
};

export default isAdminMiddleware;
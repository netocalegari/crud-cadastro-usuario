import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response) => {
  const { email, password } = request.body;

  const userLogin = userLoginService({email, password});

  if (userLogin === 'Invalid email/password') {
    return response.status(401).json({
      message: 'Invalid email/password'
    });
  };
  
  return response.status(200).json(userLogin);
};

export default userLoginController;
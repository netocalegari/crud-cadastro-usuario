import { request } from "express";
import users from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const emailAlreadyRegistered = users.find(user => user.email === email);

  if (emailAlreadyRegistered) {
    return response.status(400).json({
      message: 'This email is already registered'
    });
  };

  next();
};

export default verifyEmailAvailabilityMiddleware;
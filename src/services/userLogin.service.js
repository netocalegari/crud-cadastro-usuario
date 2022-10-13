import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!user || !passwordMatch) {
    return "Invalid email/password";
  }

  const token = jwt.sign(
    {
      email: email,
      uuid: user.uuid,
    },
    "SECRET_KEY",
    {
      expiresIn: "24h",
    }
  );

  return { token };
};

export default userLoginService;

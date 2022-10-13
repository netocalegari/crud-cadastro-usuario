import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import userDataController from "../controllers/userData.controller";
import userLoginController from "../controllers/userLogin.controller";
import isAdminMiddleware from "../middlewares/isAdmin.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";

const router = Router();

router.post('/users', verifyEmailAvailabilityMiddleware, createUserController) // criação de usuários
router.post('/login', userLoginController) // login
router.get('/users', verifyAuthTokenMiddleware, isAdminMiddleware, listUsersController) // lista todos os usuários
router.get('/users/profile', verifyAuthTokenMiddleware, userDataController) // retorna os dados do usuário logado
router.patch('/users/:uuid', verifyAuthTokenMiddleware, updateUserController) // atualiza dados do usuário
router.delete('/users/:uuid', verifyAuthTokenMiddleware, deleteUserController) // deleta 

export default router;
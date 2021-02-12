import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

export default class AuthRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.getAuthRoutes();
  }

  private getAuthRoutes() {
    this.router.post(`/login`, AuthController.login());
    this.router.post(`/register`, AuthController.register());
  }
}

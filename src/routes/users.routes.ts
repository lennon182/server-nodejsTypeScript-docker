import express, { Request, Response, Router } from 'express';
import userController from '../controllers/user.controller';
import AuthMiddleware from './../middlewares/auth.midd';

export default class UserRouter {
  router: Router;
  private path: string = 'users';
  private userController;

  constructor() {
    this.router = Router();
    this.userController = new userController();
    this.getUserRoutes();
  }

  private getUserRoutes() {
    this.router.get(`/${this.path}`, this.userController.getUsers());
    this.router.get(`/${this.path}/:userId`, this.userController.getUser());
    this.router.post(`/${this.path}`, this.userController.createUSer());
    this.router.put(`/${this.path}/:userId`, this.userController.updateUser());
    this.router.delete(`/${this.path}/:userId`, this.userController.deletUser());
  }
}

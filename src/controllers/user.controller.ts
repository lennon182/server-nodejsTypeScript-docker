import { Request, Response } from 'express';
import { userModel } from '../models/User.model';

export default class userController {
  private getUsersController: any = '';
  private getUserController: any = '';
  private createUserController: any = '';
  private updateUserController: any = '';
  private deleteUserController: any = '';

  private User = userModel;

  constructor() {}

  getUsers() {
    this.getUsersController = async (req: Request, resp: Response) => {
      try {
        const users = await this.User.find();
        const usersCount = users.length;

        return resp.json({
          msg: 'Get Users Controller',
          users,
          usersCount,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in get User Method',
          error,
          ok: false,
        });
      }
    };
    return this, this.getUsersController;
  }

  getUser() {
    this.getUserController = async (req: Request, resp: Response) => {
      const { userId } = req.params;

      try {
        const userFound = await this.User.findById(userId);

        return resp.json({
          msg: 'Get user',
          userId,
          userFound,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Get user Error',
          ok: false,
          error,
        });
      }
    };
    return this.getUserController;
  }

  createUSer() {
    this.createUserController = async (req: Request, resp: Response) => {
      const newUser = req.body;

      try {
        const userCreated = await this.User.create(newUser);

        return resp.json({
          msg: 'Create New User',
          userCreated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'ERROR in Create User Method',
          error,
          ok: false,
        });
      }
    };
    return this.createUserController;
  }

  updateUser() {
    this.updateUserController = async (req: Request, resp: Response) => {
      const { userId } = req.params;
      const { body } = req.body;
      try {
        const userUpdated = await this.User.findByIdAndUpdate(userId, body, {
          new: true,
        });

        return resp.json({
          msg: 'Update User',
          userId,
          userUpdated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Update User Error',
          ok: false,
          error,
        });
      }
    };

    return this.updateUserController;
  }

  deletUser() {
    this.deleteUserController = async (req: Request, resp: Response) => {
      const { userId } = req.params;
      try {
        const userDeleted = await this.User.findByIdAndDelete(userId);

        return resp.json({
          msg: 'Delete User',
          userId,
          userDeleted,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Delete User Error',
          ok: false,
          error,
        });
      }
    };

    return this.deleteUserController;
  }
}

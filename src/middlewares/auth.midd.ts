import { NextFunction, Request, Response } from 'express';
import Token from '../libs/token.lib';
import { userModel } from '../models/User.model';

export default class AuthMiddleware {
  constructor() {}

  static verifyAuth() {
    const verify = async (req: any, resp: Response, next: NextFunction) => {
      const authToken = req.headers['x-access-token'];

      if (!authToken) return resp.json({ msg: 'No Permission, no Token' });

      try {
        const decode: any = Token.verifyToken(authToken);
        console.log(decode);
        req.userId = decode._id;
        const user = userModel.findById(req.userId, { password: 0 });

        if (!user) return resp.json({ msg: 'User not found' });

        next();
      } catch (error) {
        return resp.json({ msg: 'Invalid Token', error });
      }
    };

    return verify;
  }
}

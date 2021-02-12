import jwt from 'jsonwebtoken';
import envs from './../configs/config';

export default class Token {
  constructor() {}

  static getToken(data: {}) {
    const token = jwt.sign(data, envs.SECRET, { expiresIn: 86400 });
    return token;
  }

  static verifyToken(token: any) {
    return jwt.verify(token, envs.SECRET);
  }
}

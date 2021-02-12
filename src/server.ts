import express from 'express';

export default class Server {
  app: express.Application;
  private port: number = 3000;

  constructor() {
    this.app = express();
  }

  startSever(cb: Function) {
    this.app.listen(this.port, cb());
  }
}

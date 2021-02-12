import { Router, Request, Response } from 'express';

export default class IndexRouter {
  router: Router;
  private apiVersion: string = '1.0';

  constructor() {
    this.router = Router();
    this.getIndexRoutes();
  }

  private getIndexRoutes() {
    this.router.get(`/`, (req: Request, resp: Response) => {
      resp.send(`
            <h1>Welcome Api ${this.apiVersion}</h1>
          `);
    });
  }
}

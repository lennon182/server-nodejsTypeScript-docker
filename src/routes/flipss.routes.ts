import { Router } from 'express';
import FlippsController from '../controllers/flipps.controller';

export default class FlippsRouter {
  router: Router;
  private path: string = 'flipps';
  private flippController;
  constructor() {
    this.router = Router();
    this.flippController = new FlippsController();
    this.getFlippsRoutes();
  }

  private getFlippsRoutes() {
    this.router.get(`/${this.path}`, this.flippController.getFlipps());
    this.router.get(`/${this.path}/:flippId`, this.flippController.getFlipp());
    this.router.post(`/${this.path}`, this.flippController.createFlipps());
    this.router.put(`/${this.path}/:flippId`, this.flippController.updateFlipps());
    this.router.delete(`/${this.path}/:flippId`, this.flippController.deleteFlipps());
  }
}

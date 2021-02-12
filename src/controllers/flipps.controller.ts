import { Request, Response } from 'express';
import { Model, Document } from 'mongoose';
import FlippsModel from '../models/Flipp.model';

export default class FlippsController {
  private getFlippsController: any = '';
  private getFlippController: any = '';
  private createFlippsController: any = '';
  private updateFlippsController: any = '';
  private deleteFlippsController: any = '';

  private Flipp: Model<Document<any>> = FlippsModel;

  constructor() {}

  getFlipps() {
    this.getFlippsController = async (req: Request, resp: Response) => {
      try {
        const flipss = await this.Flipp.find().populate('user', ['name']);
        const flipsCount = flipss.length;

        return resp.json({
          msg: 'Get Flipps',
          flipss,
          flipsCount,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Get Flipps Error',
          ok: false,
          error,
        });
      }
    };

    return this.getFlippsController;
  }

  getFlipp() {
    this.getFlippController = async (req: Request, resp: Response) => {
      const { flippId } = req.params;

      try {
        const flippFound = await this.Flipp.findById(flippId).populate('user', ['name']);

        return resp.json({
          msg: 'Get Flipp',
          flippId,
          flippFound,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Get Flipp Error',
          ok: false,
          error,
        });
      }
    };

    return this.getFlippController;
  }

  createFlipps() {
    this.createFlippsController = async (req: Request, resp: Response) => {
      const newFlipp = req.body;

      try {
        const flippCreated = await this.Flipp.create(newFlipp);

        return resp.json({
          msg: 'Create New Flipps',
          flippCreated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'New Flipps Error',
          ok: false,
          error,
        });
      }
    };

    return this.createFlippsController;
  }

  updateFlipps() {
    this.updateFlippsController = async (req: Request, resp: Response) => {
      const { flippId } = req.params;
      const { body } = req.body;
      try {
        const flippUpfdated = await this.Flipp.findByIdAndUpdate(flippId, body, {
          new: true,
        });

        return resp.json({
          msg: 'Update Flipp',
          flippUpfdated,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Update Flipp Error',
          ok: false,
          error,
        });
      }
    };

    return this.updateFlippsController;
  }

  deleteFlipps() {
    this.deleteFlippsController = async (req: Request, resp: Response) => {
      const { flippId } = req.params;
      try {
        const flippDeletd = await this.Flipp.findByIdAndDelete(flippId);

        return resp.json({
          msg: 'Delete Flipps',
          flippId,
          flippDeletd,
          ok: true,
        });
      } catch (error) {
        return resp.json({
          msg: 'Delete Flipps Error',
          ok: false,
          error,
        });
      }
    };

    return this.deleteFlippsController;
  }
}

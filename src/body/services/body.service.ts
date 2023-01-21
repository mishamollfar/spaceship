import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupedBody } from '../interfaces/grouped-body';
import { Body, BodyDocument } from '../schemas/body.schema';

@Injectable()
export class BodyService {
  constructor(@InjectModel(Body.name) private bodyModel: Model<BodyDocument>) {}

  /**
   * Method return all document with collections - body
   * @return {Promise<Body[]>}
   */
  async findAll(): Promise<Body[]> {
    return await this.bodyModel
      .aggregate([
        {
          $group: {
            _id: '$type',
            price: {
              $sum: '$price',
            },
            weight: {
              $sum: '$weight',
            },
            body: {
              $push: {
                name: '$name',
                vendor: '$vendor',
                price: '$price',
                body_material: '$body_material',
                max_storage: '$max_storage',
              },
            },
          },
        },
      ])
      .exec();
  }

  /**
   * Method return array grouped document by different types
   * @return {Promise<Body[]>}
   */
  async findGroupedBodyByTypes(): Promise<GroupedBody[]> {
    return await this.bodyModel
      .aggregate([
        {
          $group: {
            _id: '$type',
            price: {
              $sum: '$price',
            },
            weight: {
              $sum: '$weight',
            },
            body: {
              $push: {
                name: '$name',
                vendor: '$vendor',
                type: '$type',
                price: '$price',
                body_material: '$body_material',
                max_storage: '$max_storage',
                weight: '$weight',
              },
            },
          },
        },
        {
          $match: {
            _id: {
              $ne: 'any',
            },
          },
        },
      ])
      .exec();
  }
}

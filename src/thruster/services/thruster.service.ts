import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupedThruster } from '../interfaces/grouped-thruster';
import { Thruster, ThrusterDocument } from '../schemas/thruster.schema';

@Injectable()
export class ThrusterService {
  constructor(
    @InjectModel(Thruster.name) private thrusterModel: Model<ThrusterDocument>,
  ) {}

  /**
   * Method return array all document with collection - thruster
   * @return {Promise<Thruster[]>}
   */
  async findAll(): Promise<Thruster[]> {
    return await this.thrusterModel.find({}).exec();
  }

  /**
   * Method return array grouped document by different types
   * @return {Promise<Thruster[]>}
   */
  async findThrusterByTypes(): Promise<GroupedThruster[]> {
    return await this.thrusterModel
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
            thruster: {
              $push: {
                name: '$name',
                vendor: '$vendor',
                type: '$type',
                price: '$price',
                efficiency: '$efficiency',
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

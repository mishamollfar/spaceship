import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupedFuelTank } from '../interfaces/grouped-fuel-tank';
import { FuelTank, FuelTankDocument } from '../schemas/fuel-tank.schema';

@Injectable()
export class FuelTankService {
  constructor(
    @InjectModel(FuelTank.name) private fuelTankModel: Model<FuelTankDocument>,
  ) {}

  /**
   * Method return array all documents with collection - fuel_tank
   * @return {Promise<FuelTank[]>}
   */
  async findAll(): Promise<FuelTank[]> {
    return await this.fuelTankModel
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
                fuel_capacity: '$fuel_capacity',
              },
            },
          },
        },
      ])
      .exec();
  }

  /**
   * Method return array grouped document by different types
   * @return {Promise<FuelTank[]>}
   */
  async findFuelTankByTypes(): Promise<GroupedFuelTank[]> {
    return await this.fuelTankModel
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
            fuelTank: {
              $push: {
                name: '$name',
                vendor: '$vendor',
                type: '$type',
                price: '$price',
                fuel_capacity: '$fuel_capacity',
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

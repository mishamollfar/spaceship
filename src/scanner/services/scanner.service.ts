import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scanner, ScannerDocument } from '../schemas/scanner.schema';

@Injectable()
export class ScannerService {
  constructor(
    @InjectModel(Scanner.name) private scannerModel: Model<ScannerDocument>,
  ) {}

  async create(scanner: Scanner): Promise<Scanner> {
    return await this.scannerModel.create(scanner);
  }

  async findAll(): Promise<Scanner[]> {
    return await this.scannerModel.find({}).exec();
  }

  async findOne(id: string): Promise<Scanner> {
    return await this.scannerModel.findById(id).exec();
  }

  async deleteOne(id: string): Promise<Scanner> {
    return await this.scannerModel.findByIdAndRemove(id).exec();
  }

  async updateOne(id: string, body: Scanner): Promise<Scanner> {
    return await this.scannerModel
      .findOneAndUpdate({ _id: id }, { $set: body })
      .exec();
  }
}

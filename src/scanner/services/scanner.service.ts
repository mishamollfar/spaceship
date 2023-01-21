import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateScannerDto } from '../dto/create-scanner.dto';
import { Scanner, ScannerDocument } from '../schemas/scanner.schema';

@Injectable()
export class ScannerService {
  constructor(
    @InjectModel(Scanner.name) private scannerModel: Model<ScannerDocument>,
  ) {}

  /**
   * Method create new scanner collection document and return this document
   * @param scanner: CreateScannerDto - fields to new scanner document
   * @return {Scanner}
   */
  async create(scanner: CreateScannerDto): Promise<Scanner> {
    return await this.scannerModel.create(scanner);
  }

  /**
   * Method return all documents with collection - scanner and sorted by price descending
   * @return {Scanner[]}
   */
  async findAll(): Promise<Scanner[]> {
    return await this.scannerModel.find({}).exec();
  }

  /**
   * Method return one scanner document by id
   * @param id: string - scanner id
   * @return {Scanner}
   */
  async findOne(id: string): Promise<Scanner> {
    return await this.scannerModel.findById(id).exec();
  }

  /**
   * Method remove one scanner document by id and return this document
   * @param id: string - scanner id
   * @return {Scanner}
   */
  async deleteOne(id: string): Promise<Scanner> {
    return await this.scannerModel.findByIdAndRemove(id).exec();
  }

  /**
   * Method find one scanner document by id and update fields by body parameters. After update method return updated document
   * @param id: string - scanner id
   * @param body: CreateScannerDto - update fields
   * @return {Scanner}
   */
  async updateOne(id: string, body: CreateScannerDto): Promise<Scanner> {
    return await this.scannerModel
      .findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
      .exec();
  }
}

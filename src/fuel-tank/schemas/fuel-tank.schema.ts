import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Scanner } from '../../scanner/schemas/scanner.schema';

export type FuelTankDocument = HydratedDocument<FuelTank>;

@Schema()
export class FuelTank extends Scanner {
  @Prop({ required: true, type: Number })
  fuelCapacity: number;
}

export const FuelTankSchema = SchemaFactory.createForClass(FuelTank);

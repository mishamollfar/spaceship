import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Scanner } from '../../scanner/schemas/scanner.schema';

export type ThrusterDocument = HydratedDocument<Thruster>;

@Schema()
export class Thruster extends Scanner {
  @Prop({ required: true, type: Number })
  efficiency: number;
}

export const ThrusterSchema = SchemaFactory.createForClass(Thruster);

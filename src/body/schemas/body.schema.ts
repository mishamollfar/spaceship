import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Scanner } from '../../scanner/schemas/scanner.schema';

export type BodyDocument = HydratedDocument<Body>;

@Schema()
export class Body extends Scanner {
  @Prop({ required: true, type: Number })
  maxStorage: number;
}

export const BodySchema = SchemaFactory.createForClass(Body);

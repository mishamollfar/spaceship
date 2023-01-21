import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Scanner } from '../../scanner/schemas/scanner.schema';

export type BodyDocument = HydratedDocument<Body>;

@Schema()
export class Body extends Scanner {
  @Prop({ required: true, type: Number })
  body_material: number;

  @Prop({ required: true, type: Number })
  max_storage: number;
}

export const BodySchema = SchemaFactory.createForClass(Body);

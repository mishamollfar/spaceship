import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ScannerType } from '../types/scanner-type';

export type ScannerDocument = HydratedDocument<Scanner>;

@Schema()
export class Scanner {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  vendor: string;

  @Prop({ required: true, enum: ScannerType })
  type: ScannerType;

  @Prop({ required: true, type: String })
  weight: string;

  @Prop({ required: true, type: Number })
  price: number;
}

export const ScannerSchema = SchemaFactory.createForClass(Scanner);

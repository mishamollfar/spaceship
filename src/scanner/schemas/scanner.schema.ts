import * as mongoose from 'mongoose';

export const ScannerSchema = new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
  vendor: mongoose.SchemaTypes.String,
  type: mongoose.SchemaTypes.String,
  weight: mongoose.SchemaTypes.String,
  price: mongoose.SchemaTypes.Number,
});

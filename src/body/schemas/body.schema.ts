import * as mongoose from 'mongoose';

export const BodySchema = new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
  vendor: mongoose.SchemaTypes.String,
  type: mongoose.SchemaTypes.String,
  bodyMaterial: mongoose.SchemaTypes.Number,
  maxStorage: mongoose.SchemaTypes.Number,
  weight: mongoose.SchemaTypes.Number,
  price: mongoose.SchemaTypes.Number,
});

import * as mongoose from 'mongoose';

export const ThrusterSchema = new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
  vendor: mongoose.SchemaTypes.String,
  type: mongoose.SchemaTypes.String,
  efficiency: mongoose.SchemaTypes.Number,
  weight: mongoose.SchemaTypes.Number,
  price: mongoose.SchemaTypes.Number,
});

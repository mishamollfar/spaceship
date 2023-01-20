import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Thruster, ThrusterSchema } from './schemas/thruster.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Thruster.name, schema: ThrusterSchema, collection: 'thruster' },
    ]),
  ],
  providers: [],
})
export class ThrusterModule {}

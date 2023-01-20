import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Body, BodySchema } from './schemas/body.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Body.name, schema: BodySchema, collection: 'body' },
    ]),
  ],
  providers: [],
})
export class BodyModule {}

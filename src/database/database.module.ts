import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mollfar:misha07099217@spaceship.whelghk.mongodb.net/spaceship?retryWrites=true&w=majority',
    ),
  ],
})
export class DatabaseModule {}

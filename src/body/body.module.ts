import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { databaseProviders } from '../database/database.providers';
import { bodyProviders } from './providers/body.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...databaseProviders, ...bodyProviders],
})
export class BodyModule {}

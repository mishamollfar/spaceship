import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { databaseProviders } from '../database/database.providers';
import { thrusterProviders } from './providers/thruster.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...databaseProviders, ...thrusterProviders],
})
export class ThrusterModule {}

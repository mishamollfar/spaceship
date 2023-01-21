import { Module } from '@nestjs/common';
import { ThrusterService } from './services/thruster.service';

@Module({
  imports: [],
  providers: [ThrusterService],
  exports: [ThrusterService],
})
export class ThrusterModule {}

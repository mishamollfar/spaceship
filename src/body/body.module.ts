import { Module } from '@nestjs/common';
import { BodyService } from './services/body.service';

@Module({
  imports: [],
  providers: [BodyService],
  exports: [BodyService],
})
export class BodyModule {}

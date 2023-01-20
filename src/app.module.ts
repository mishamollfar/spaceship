import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyModule } from './body/body.module';
import { ThrusterModule } from './thruster/thruster.module';
import { FuelTankModule } from './fuel-tank/fuel-tank.module';
import { ScannerModule } from './scanner/scanner.module';

@Module({
  imports: [
    BodyModule,
    ThrusterModule,
    FuelTankModule,
    ScannerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

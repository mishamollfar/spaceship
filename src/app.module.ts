import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyModule } from './body/body.module';
import { DatabaseModule } from './database/database.module';
import { FuelTankModule } from './fuel-tank/fuel-tank.module';
import { ScannerModule } from './scanner/scanner.module';
import { ThrusterModule } from './thruster/thruster.module';

@Module({
  imports: [
    DatabaseModule,
    BodyModule,
    FuelTankModule,
    ScannerModule,
    ThrusterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

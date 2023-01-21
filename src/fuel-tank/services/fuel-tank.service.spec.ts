import { Test, TestingModule } from '@nestjs/testing';
import { FuelTankService } from './fuel-tank.service';

describe('FuelTankService', () => {
  let service: FuelTankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuelTankService],
    }).compile();

    service = module.get<FuelTankService>(FuelTankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

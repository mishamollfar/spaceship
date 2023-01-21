import { Test, TestingModule } from '@nestjs/testing';
import { ThrusterService } from './thruster.service';

describe('ThrusterService', () => {
  let service: ThrusterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThrusterService],
    }).compile();

    service = module.get<ThrusterService>(ThrusterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

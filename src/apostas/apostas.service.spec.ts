import { Test, TestingModule } from '@nestjs/testing';
import { ApostasService } from './apostas.service';

describe('ApostasService', () => {
  let service: ApostasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApostasService],
    }).compile();

    service = module.get<ApostasService>(ApostasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

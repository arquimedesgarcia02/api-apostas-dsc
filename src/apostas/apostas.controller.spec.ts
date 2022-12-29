import { Test, TestingModule } from '@nestjs/testing';
import { ApostasController } from './apostas.controller';

describe('ApostasController', () => {
  let controller: ApostasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApostasController],
    }).compile();

    controller = module.get<ApostasController>(ApostasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SecondHandlerService } from './second-handler.service';

describe('SecondHandlerService', () => {
  let service: SecondHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecondHandlerService],
    }).compile();

    service = module.get<SecondHandlerService>(SecondHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

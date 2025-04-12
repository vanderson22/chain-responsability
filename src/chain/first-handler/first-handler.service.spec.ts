import { Test, TestingModule } from '@nestjs/testing';
import { FirstHandlerService } from './first-handler.service';

describe('FirstHandlerService', () => {
  let service: FirstHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirstHandlerService],
    }).compile();

    service = module.get<FirstHandlerService>(FirstHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

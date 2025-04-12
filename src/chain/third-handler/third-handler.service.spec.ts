import { Test, TestingModule } from '@nestjs/testing';
import { ThirdHandlerService } from './third-handler.service';

describe('ThirdHandlerService', () => {
  let service: ThirdHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdHandlerService],
    }).compile();

    service = module.get<ThirdHandlerService>(ThirdHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

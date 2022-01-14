import { Test, TestingModule } from '@nestjs/testing';
import { ShareidService } from './shareid.service';

describe('ShareidService', () => {
  let service: ShareidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShareidService],
    }).compile();

    service = module.get<ShareidService>(ShareidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

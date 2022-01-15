import { Test, TestingModule } from '@nestjs/testing';
import { ShareinfoService } from './shareinfo.service';

describe('ShareinfoService', () => {
  let service: ShareinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShareinfoService],
    }).compile();

    service = module.get<ShareinfoService>(ShareinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

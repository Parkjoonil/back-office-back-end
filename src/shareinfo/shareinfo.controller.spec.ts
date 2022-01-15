import { Test, TestingModule } from '@nestjs/testing';
import { ShareinfoController } from './shareinfo.controller';

describe('ShareinfoController', () => {
  let controller: ShareinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShareinfoController],
    }).compile();

    controller = module.get<ShareinfoController>(ShareinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

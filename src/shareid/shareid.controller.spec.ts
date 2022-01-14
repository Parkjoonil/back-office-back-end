import { Test, TestingModule } from '@nestjs/testing';
import { ShareidController } from './shareid.controller';

describe('ShareidController', () => {
  let controller: ShareidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShareidController],
    }).compile();

    controller = module.get<ShareidController>(ShareidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { StudentinfoController } from './studentinfo.controller';

describe('StudentinfoController', () => {
  let controller: StudentinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentinfoController],
    }).compile();

    controller = module.get<StudentinfoController>(StudentinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

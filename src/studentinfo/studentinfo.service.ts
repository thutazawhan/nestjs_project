import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StudentInfoModule } from './studentinfo.module';
import { StudentInfo } from './sudentinfo.entity/sudentinfo.entity.spec';

@Injectable()
export class StudentinfoService {
  constructor(
    @InjectModel(StudentInfo)
    private studentModel: typeof StudentInfo,
  ) {}

  async findAll(): Promise<StudentInfoModule[]> {
    return this.studentModel.findAll();
  }
}
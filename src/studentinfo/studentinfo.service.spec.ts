import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StudentInfo } from './sudentinfo.entity/sudentinfo.entity.spec';


@Injectable()
export class StudentinfoService {
  constructor(
    @InjectModel(StudentInfo)
    private readonly studentInfoModel: typeof StudentInfo,
  ) {}

  findAll() {
    return this.studentInfoModel.findAll();
  }
}
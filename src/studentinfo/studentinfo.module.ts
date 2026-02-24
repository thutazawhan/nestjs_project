import { Module } from '@nestjs/common';
import { StudentinfoController } from './studentinfo.controller';
import { StudentinfoService } from './studentinfo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentInfo } from './sudentinfo.entity/sudentinfo.entity.spec';

@Module({
  imports: [SequelizeModule.forFeature([StudentInfo])],
  controllers: [StudentinfoController],
  providers: [StudentinfoService],
})
export class StudentInfoModule {}
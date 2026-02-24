import { Controller, Get } from '@nestjs/common';
import { StudentinfoService } from './studentinfo.service';

@Controller('studentinfo')
export class StudentinfoController {
  constructor(private readonly service: StudentinfoService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }
}
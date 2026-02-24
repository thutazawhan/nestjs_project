import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // localhost:3000
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }

  constructor(private readonly appService: AppService) {}

  @Get()
  productFunc(){
    return this.appService.getJson();
  }

  @Get('/getjson')
  getJson(){
    return this.appService.getJson();
  }



  
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NextJs!';
  }

  getName(): string{
    return "thuta zaw";
  }

  getJson() {
    return{
      name: 'kittasil',
      lastname: 'silanon',
      age: 39,
      version : process.env.API_VERSION,
      password: process.env.PASSWORD,
    }
  }



}

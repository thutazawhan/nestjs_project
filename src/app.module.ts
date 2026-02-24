import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilityModule } from './shared/utility/utility.module';
// import { YourinfoModule } from './yourinfo/yourinfo.module';
import { GlobalHelperService } from './shared/global-helper/global-helper.service';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { Customer } from './customer/entities/customer.entity';
import { StudentInfoModule } from './studentinfo/studentinfo.module';
import { StudentInfo } from './studentinfo/sudentinfo.entity/sudentinfo.entity.spec';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: process.env.DB_DIALECT as Dialect,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Customer, StudentInfo],
      autoLoadModels: true,
      sync: { alter: true },
    }),
    UtilityModule,
    // YourinfoModule,
    CustomerModule,
    StudentInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService, GlobalHelperService],
})
export class AppModule {}
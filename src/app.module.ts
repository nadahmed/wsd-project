import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourceController } from './resource/resource.controller';
import { ResourceService } from './resource/resource.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

let ormConfig:TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
};

if (process.env.NODE_ENV === 'production' || process.env.DATABASE_URL) {
  ormConfig = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
  };
}



@Module({
  imports: [
    TypeOrmModule.forRoot({...ormConfig,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,    
    }),
  ],
  controllers: [AppController, ResourceController],
  providers: [AppService, ResourceService],
})
export class AppModule {}

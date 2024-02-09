import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourceController } from './resource/resource.controller';
import { ResourceService } from './resource/resource.service';

@Module({
  imports: [],
  controllers: [AppController, ResourceController],
  providers: [AppService, ResourceService],
})
export class AppModule {}

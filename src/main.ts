import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';
import * as nunjucks from 'nunjucks';

import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();
  
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: process.env.DEBUG?new session.MemoryStore():null,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Text Analysis API')
    .setDescription('The Text Analysis API to analyze text')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const assets = join(__dirname, '..', 'public'); // Directory with static HTML/CSS/JS/other files
  const views = join(__dirname, '..', 'views'); // Directory with *.njk templates

  nunjucks.configure(views, { express, noCache: true});

  app.useStaticAssets(assets);
  app.setBaseViewsDir(views);
  app.setViewEngine('njk');

  await app.listen(3000);
}
bootstrap();

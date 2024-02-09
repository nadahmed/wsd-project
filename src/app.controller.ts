import { UploadedFile, UseInterceptors, FileTypeValidator, Controller, Get, Post, Render, Req, ParseFilePipe, Redirect, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';

const parserPipe = new ParseFilePipe({
  validators: [
    new FileTypeValidator({fileType:'text/plain'})
  ]
})

@Controller()
export class AppController {

  @Get()
  @Render('index')
  getHello(): Object {
    return { 
      title: 'Text Analyzer'
    };
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async postHello(@Req() request:Request, @Res() response:Response, @UploadedFile(parserPipe) file:Express.Multer.File) {
    const text = file.buffer.toString();
    request.session['content'] = text;
    
    try {
      await new Promise<void>((res, rej) => {
        request.session.save((err) => {
          if (!!err) {
            return rej(err);
          }
          response.status(302).redirect('/resource');
          return res();
        });
      });
    } catch (e) {
      return response.status(500).send('An error occurred while saving the session. Please try again later.');
    }
  }
}


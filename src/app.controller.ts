import { UploadedFile, UseInterceptors, FileTypeValidator, Controller, Get, Post, Render, Req, ParseFilePipe, Redirect, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiExcludeEndpoint, ApiOperation } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { FileUploadSchema } from './schema';

const parserPipe = new ParseFilePipe({
  validators: [
    new FileTypeValidator({fileType:'text/plain'})
  ]
})

@Controller()
export class AppController {

  @Get()
  @ApiExcludeEndpoint()
  @Render('index')
  getIndex(): Object {
    return { 
      title: 'Text Analyzer'
    };
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: "Upload a file to proceed with the next operations." })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload a .txt file',
    type: FileUploadSchema,
  })
  async postFile(@Req() request:Request, @Res() response:Response, @UploadedFile(parserPipe) file:Express.Multer.File) {

    const text = file.buffer.toString();
    request.session['content'] = text;
    
    try {
      await new Promise<void>((res, rej) => {
        request.session.save((err) => {
          if (!!err) {
            return rej(err);
          }

          // If request from Swagger, return the response
          if (request.headers['referer'].endsWith('/docs')) {
            response.status(200).send({message: 'File uploaded successfully', redirect: '/resource'});
            return res();
          }
          
          // If request from browser, redirect to /resource
          response.status(302).redirect('/resource');
          return res();
        });
      });
    } catch (e) {
      return response.status(500).send('An error occurred while saving the session. Please try again later.');
    }
  }

  @Post('clear_content')
  @ApiOperation({ summary: "Clear the content of the uploaded file." })
  async clearContent(@Req() request:Request, @Res() response:Response) {

    delete request.session['content'];

    try {
      await new Promise<void>((res, rej) => {
        request.session.save((err) => {
          if (!!err) {
            return rej(err);
          }

          // If request from Swagger, return the response
          if (request.headers['referer'].endsWith('/docs')) {
            response.status(200).send({message: 'Content cleared successfully', redirect: '/'});
            return res();
          }
          
          // If request from browser, redirect to /resource
          response.status(302).redirect('/');
          return res();
        });
      });
    } catch (e) {
      return response.status(500).send('An error occurred while saving the session. Please try again later.');
    }
  }

}


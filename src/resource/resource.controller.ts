import { Controller, UseGuards, ParseFilePipe, FileTypeValidator, Get, Render, Req } from '@nestjs/common';
import { ResourceGuard } from './resource.guard';
import { ResourceService } from './resource.service';
import { Request } from 'express';

@Controller('resource')
@UseGuards(ResourceGuard)
export class ResourceController {

    constructor(private readonly resourceService: ResourceService) {}

    @Get("/")
    @Render('resource')
    root(@Req() request:Request): Object {
        const text = request.session['content'];
        
        const API_LIST = [
            {name: "Number of Words", url: "/resource/no_of_words"},
            {name: "Number of Characters", url: "/resource/no_of_characters"},
            {name: "Number of Sentences", url: "/resource/no_of_sentences"},
            {name: "Number of Paragraphs", url: "/resource/no_of_paragraphs"},
            {name: "Longest Words", url: "/resource/longest_words"}
        ];

        return { 
            title: 'Text Analyzer',
            content: text,
            apiList: API_LIST
        };
    }

    @Get("/no_of_words")
    getNumberOfWords(@Req() request:Request): number {
    const text = request.session['content'];
      return this.resourceService.getNoOfWords(text);
    }
  
    @Get("/no_of_characters")
    getNumberOfCharacters(@Req() request:Request): number {
        const text = request.session['content'];
      return this.resourceService.getNoOfCharacters(text);
    }
  
    @Get("/no_of_sentences")
    getNumberOfSentences(@Req() request:Request): number {
        const text = request.session['content'];
      return this.resourceService.getNoOfSentences(text);
    }
  
    @Get("/no_of_paragraphs")
    getNoOfParagraphs(@Req() request:Request):number{
        const text = request.session['content'];
      return this.resourceService.getNoOfParagraphs(text);
    }
  
    @Get("/longest_words")
    getLongestWord(@Req() request:Request):string[]{
        const text = request.session['content'];
      return this.resourceService.getLongestWords(text);
    }

}

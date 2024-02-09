import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/no_of_words")
  getNumberOfWords(): number {
    const text = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";
    return this.appService.getNoOfWords(text);
  }

  @Get("/no_of_characters")
  getNumberOfCharacters(): number {
    const text = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";
    return this.appService.getNoOfCharacters(text);
  }

  @Get("/no_of_sentences")
  getNumberOfSentences(): number {
    const text = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";
    return this.appService.getNoOfSentences(text);
  }

  @Get("/no_of_paragraphs")
  getNoOfParagraphs():number{
    const text = `
    Assume that your company assigned you to build a text analyzer tool. Your task will be to create an application that reads from a text file and calculates some parameters.
    The scripts should calculate the count of words, characters, paragraphs, and more of the text written in the file. You may assume that the file contains only English words separated by whitespace.
    `
    return this.appService.getNoOfParagraphs(text);
  }

  @Get("/longest_word")
  getLongestWord():string{
    const text = `
    Assume that your company assigned you to build a text analyzer tool. Your task will be to create an application that reads from a text file and calculates some parameters.
    The scripts should calculate the count of words, characters, paragraphs, and more of the text written in the file. You may assume that the file contains only English words separated by whitespace.
    `
    return this.appService.getLongestWord(text);
  }
}

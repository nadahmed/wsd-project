import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Text Analysis API is running!';
  }

  getWords(text:string): string[]{
    return text
    .trim()
    .replaceAll(".","")
    .split(" ")
  }

  getNoOfWords(text: string): number {
    return this.getWords(text)
    .reduce((acc,curr) => curr.trim() !== ""? ++acc:acc, 0)
  }

  getNoOfCharacters(text: string): number {
    return text.length; // including spaces
  }

  getNoOfSentences(text: string): number {
    return text.split(".").filter(s => s !== "").length;
  }

  getNoOfParagraphs(text:string):number {
    return text.trim().split('\n').filter(s => s !== "").length;
  }

  getLongestWord(text:string):string{
    return this.getWords(text).sort((a,b)=>b.length-a.length)[0]
  }

}
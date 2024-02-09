import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourceService {
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
    
      getLongestWords(text:string):string[]{
        const arr:string[][] = [];
        this.getWords(text).forEach(word => {
          arr[word.length-1] ? arr[word.length-1].push(word) : arr[word.length-1] = [word];
        });
        return arr[arr.length-1];
      }
}

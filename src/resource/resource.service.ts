import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourceService {

      getWords(text:string): string[]{
        return text
        .replaceAll("."," ")
        .replaceAll(","," ")
        .split(" ")
        .map(s => s.trim())
        .filter(s => s !== "");
      }
    
      getNoOfWords(text: string): number {
        return this.getWords(text)
        .reduce((acc,curr) => curr.trim() !== ""? ++acc:acc, 0)
      }
    
      getNoOfCharacters(text: string): number {
        // Remove all spaces and punctuation marks from the text and return the length of the remaining string
        return text.replaceAll(/\r?\n|\r/g,"").length;

      }
    
      getNoOfSentences(text: string): number {
        return text.split(".").filter(s => s.trim() !== "").length;
      }
    
      getNoOfParagraphs(text:string):number {
        return text.trim().split('\n').filter(s => s.trim() !== "").length;
      }
    
      getLongestWords(text:string):string[]{
        const longest:string[] = [];
        let max = 0;
        this.getWords(text).forEach(word => {
          if(word.length > max){
            max = word.length;
            longest.splice(0, longest.length, word);
          } else if (word.length === max){
            longest.push(word);
          }
        });
        return longest;
      }
}

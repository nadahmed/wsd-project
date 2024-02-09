import { Test, TestingModule } from '@nestjs/testing';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';

describe('ResourceController', () => {
  let controller: ResourceController;

  const text = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceController],
      providers: [ResourceService],
    }).compile();

    controller = module.get<ResourceController>(ResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // describe('/no_of_words', () => {
  //   it('should return 16 for Text', () => {

  //     expect(controller.getNumberOfWords()).toBe(16);
  //   });
  // });

  // describe("/no_of_characters", () => {
  //   it('should return 75 for Text', () => {
  //     expect(controller.getNumberOfCharacters()).toBe(75);
  //   });
  // });

  // describe("/no_of_sentences", () => {
  //   it('should return 2 for Text', () => {
  //     expect(controller.getNumberOfSentences()).toBe(2);
  //   });
  // });

  // describe("/no_of_paragraphs", () => {
  //   it('should return 1 for Text', () => {
  //     expect(controller.getNoOfParagraphs()).toBe(1);
  //   });
  // });

  // describe("/longest_words", () => {
  //   it('should return longest words', () => {
  //     expect(controller.getLongestWord()).toEqual(["quick", "brown", "jumps", "slept"]);
  //   });
  // });
});

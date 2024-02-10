import { Test, TestingModule } from '@nestjs/testing';
import { ResourceService } from './resource.service';

describe('ResourceService', () => {
  let service: ResourceService;

  const text = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceService],
    }).compile();

    service = module.get<ResourceService>(ResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('/no_of_words', () => {
    it('should return 16 for Text', () => {

      expect(service.getNoOfWords(text)).toBe(16);
    });
  });

  describe("/no_of_characters", () => {
    it('should return 75 for Text', () => {
      expect(service.getNoOfCharacters(text)).toBe(75);
    });
  });

  describe("/no_of_sentences", () => {
    it('should return 2 for Text', () => {
      expect(service.getNoOfSentences(text)).toBe(2);
    });
  });

  describe("/no_of_paragraphs", () => {
    it('should return 1 for Text', () => {
      expect(service.getNoOfParagraphs(text)).toBe(1);
    });
  });

  describe("/longest_words", () => {
    it('should return longest words', () => {
      expect(service.getLongestWords(text)).toEqual(["quick", "brown", "jumps", "slept"]);
    });
  });
});

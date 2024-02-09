import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('/', () => {
    it('should return "Text Analysis API is running!"', () => {
      expect(appController.getHello()).toBe('Text Analysis API is running!');
    });
  });

  describe('/no_of_words', () => {
    it('should return 16 for Text', () => {
      expect(appController.getNumberOfWords()).toBe(16);
    });
  });

  describe("/no_of_characters", () => {
    it('should return 75 for Text', () => {
      expect(appController.getNumberOfCharacters()).toBe(75);
    });
  });

  describe("/no_of_sentences", () => {
    it('should return 2 for Text', () => {
      expect(appController.getNumberOfSentences()).toBe(2);
    });
  });

  describe("/no_of_paragraphs", () => {
    it('should return 2 for Text', () => {
      expect(appController.getNoOfParagraphs()).toBe(2);
    });
  });

  describe("/no_of_paragraphs", () => {
    it('should return "Application"', () => {
      expect(appController.getLongestWord().toLowerCase()).toBe("application");
    });
  });

});

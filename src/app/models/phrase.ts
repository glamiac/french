export class Phrase {
  key: string;

  frenchPhrase: string;
  englishPhrase: string;
  createdDate: string;
  quizCount: number;

  constructor() {
    this.frenchPhrase = '';
    this.englishPhrase = '';
    this.createdDate = new Date().toISOString().slice(0, 10);
    this.quizCount = 0;
  }
}

export class Phrase {
  key: string;

  frenchPhrase: string;
  englishPhrase: string;
  createdDate: string;

  constructor() {
    this.frenchPhrase = '';
    this.englishPhrase = '';
    this.createdDate = new Date().toISOString().slice(0, 10);
  }
}

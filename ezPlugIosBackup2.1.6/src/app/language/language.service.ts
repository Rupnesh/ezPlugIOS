import { Injectable } from '@angular/core';
import { LanguageModel } from './language.model';

@Injectable()
export class LanguageService {
  languages: Array<LanguageModel> = new Array<LanguageModel>();

   constructor() {
     this.languages.push(
      { name: 'English', code: 'en' },
      // { name: 'Spanish', code: 'es' },
      // { name: 'French', code: 'fr' },
      { name: 'हिंदी', code: 'hi' }
     );
   }

   getLanguages() {
     return this.languages;
   }

 }

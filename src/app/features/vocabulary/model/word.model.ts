export interface WordI {
  romaji: string;
  kanji: string;
  translation: string;
  kana: string;
  more_info?: InfoI;
}

interface InfoI {
  other_translations?: string[];
  detail_translation?: string;
}

export interface WordTranslationValue {
  value: string;
  translation: string;
  word: WordI;
  type?: WordTypeEnum;
}

export enum WordTypeEnum {
  Romaji,
  Kana,
  Kanji,
}

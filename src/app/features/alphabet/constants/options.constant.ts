import {OptionsI} from '../../../core/model/core.model';
import hiraganaBasic from '../../../../assets/data/alphabet/hiragana.json';
import hiraganaD from '../../../../assets/data/alphabet/hiragana-diacritico.json';
import hiraganaDiphthong from '../../../../assets/data/alphabet/hiragana-diptongo.json';
import katakanaBasic from '../../../../assets/data/alphabet/katakana.json';
import katakanaD from '../../../../assets/data/alphabet/katakana-diacritico.json';
import katakanaDiphthong from '../../../../assets/data/alphabet/katakana-diptongo.json';

// export const OptionsVocabularyActivityType: OptionsI[] = [
//   {label: 'Kana', value: WordTypeEnum.Kana},
//   {label: 'Kanji', value: WordTypeEnum.Kanji},
//   {label: 'Romaji', value: WordTypeEnum.Romaji},
// ];

// export const OptionsVocabularyActivityTranslation: OptionsI[] = [
//   {label: 'JP -> ES', value: TranslationFlow.JP_ES},
//   {label: 'ES -> JP', value: TranslationFlow.ES_JP},
// ];

/* TODO no enviar los huevos en blanco (quizás con un filter) */
export const OptionsAlphabetHiragana: OptionsI[] = [
  {
    label: 'Básico',
    value: hiraganaBasic.concat(hiraganaD),
  },
  {
    label: 'Complejo',
    value: hiraganaDiphthong,
  },
  {
    label: 'Todo',
    value: hiraganaBasic.concat(hiraganaD, hiraganaDiphthong),
  },
];

/* TODO no enviar los huevos en blanco (quizás con un filter) */
export const OptionsAlphabetKatakana: OptionsI[] = [
  {
    label: 'Básico',
    value: katakanaBasic.concat(katakanaD),
  },
  {
    label: 'Complejo',
    value: katakanaDiphthong,
  },
  {
    label: 'Todo',
    value: katakanaBasic.concat(katakanaD, katakanaDiphthong),
  },
];

// TODO
export const OptionsAlphabetKanji: OptionsI[] = [
  {
    label: 'Básico',
    value: [1],
  },
  {
    label: 'Complejo',
    value: [2],
  },
  {
    label: 'Todo',
    value: [3],
  },
];

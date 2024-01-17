import {OptionsI} from '../../../core/model/core.model';
import hiraganaBasic from '../../../../assets/data/alphabet/hiragana.json';
import hiraganaD from '../../../../assets/data/alphabet/hiragana-diacritico.json';
import hiraganaDiphthong from '../../../../assets/data/alphabet/hiragana-diptongo.json';
import katakanaBasic from '../../../../assets/data/alphabet/katakana.json';
import katakanaD from '../../../../assets/data/alphabet/katakana-diacritico.json';
import katakanaDiphthong from '../../../../assets/data/alphabet/katakana-diptongo.json';

export const OptionsAlphabetHiragana: OptionsI[] = [
  {
    label: 'Básico',
    value: hiraganaBasic.concat(hiraganaD).filter((x) => x.value !== ''), // Avoid empty values for activity
  },
  {
    label: 'Complejo',
    value: hiraganaDiphthong,
  },
  {
    label: 'Todo',
    value: hiraganaBasic
      .concat(hiraganaD, hiraganaDiphthong)
      .filter((x) => x.value !== ''), // Avoid empty values for activity
  },
];

export const OptionsAlphabetKatakana: OptionsI[] = [
  {
    label: 'Básico',
    value: katakanaBasic.concat(katakanaD).filter((x) => x.value !== ''), // Avoid empty values for activity
  },
  {
    label: 'Complejo',
    value: katakanaDiphthong,
  },
  {
    label: 'Todo',
    value: katakanaBasic
      .concat(katakanaD, katakanaDiphthong)
      .filter((x) => x.value !== ''), // Avoid empty values for activity
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

import {OptionsI} from '../../../core/model/core.model';
import {VocabularyEnum} from '../model/vocabulary.model';

export const OptionsVocabularyActivity: OptionsI[] = [
  {label: 'Katakana/Hiragana', value: VocabularyEnum.KA_HI},
  {label: 'Kanji', value: VocabularyEnum.KANJI},
  {label: 'Romanji', value: VocabularyEnum.ROMANJI},
];

// TODO
export const OptionsVocabularyType: OptionsI[] = [
  {label: 'Transporte', value: 1},
  {label: 'Casa', value: 2},
  {label: 'Objetos', value: 3},
];

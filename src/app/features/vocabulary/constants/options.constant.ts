import {OptionsI} from '../../../core/model/core.model';
import {VocabularyEnum} from '../model/vocabulary.model';
import verbs from '../../../../assets/data/vocabulary/verbs.json';
import tastes from '../../../../assets/data/vocabulary/taste.json';

export const OptionsVocabularyActivity: OptionsI[] = [
  {label: 'Katakana/Hiragana', value: VocabularyEnum.KA_HI},
  {label: 'Kanji', value: VocabularyEnum.KANJI},
  {label: 'Romanji', value: VocabularyEnum.ROMANJI},
];

// TODO
export const OptionsVocabularyType: OptionsI[] = [
  {
    label: 'Verbos',
    value: verbs,
  },
  {
    label: 'Sabores',
    value: tastes,
  },
];

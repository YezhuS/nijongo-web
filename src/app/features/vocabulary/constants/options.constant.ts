import {OptionsI} from '../../../core/model/core.model';
import verbs from '../../../../assets/data/vocabulary/verbs.json';
import taste from '../../../../assets/data/vocabulary/taste.json';
import adjectives from '../../../../assets/data/vocabulary/adjectives.json';
import animals from '../../../../assets/data/vocabulary/animals.json';
import body from '../../../../assets/data/vocabulary/body.json';
import colors from '../../../../assets/data/vocabulary/colors.json';
import country from '../../../../assets/data/vocabulary/country.json';
import dayNumber from '../../../../assets/data/vocabulary/day-number.json';
import dayWeek from '../../../../assets/data/vocabulary/day-week.json';
import drink from '../../../../assets/data/vocabulary/drink.json';
import food from '../../../../assets/data/vocabulary/food.json';
import hobby from '../../../../assets/data/vocabulary/hobby.json';
import house from '../../../../assets/data/vocabulary/house.json';
import numbers from '../../../../assets/data/vocabulary/numbers.json';
import objects from '../../../../assets/data/vocabulary/objects.json';
import occupations from '../../../../assets/data/vocabulary/occupations.json';
import orders from '../../../../assets/data/vocabulary/orders.json';
import people from '../../../../assets/data/vocabulary/people.json';
import places from '../../../../assets/data/vocabulary/places.json';
import time from '../../../../assets/data/vocabulary/time.json';
import transport from '../../../../assets/data/vocabulary/transport.json';
import familyFormal from '../../../../assets/data/vocabulary/family-formal.json';
import familyInformal from '../../../../assets/data/vocabulary/family-informal.json';
import {WordTypeEnum} from '../model/word.model';
import {TranslationFlow} from '../model/translation.model';

export const OptionsVocabularyActivityType: OptionsI[] = [
  {label: 'Kana', value: WordTypeEnum.Kana},
  {label: 'Kanji', value: WordTypeEnum.Kanji},
  {label: 'Romaji', value: WordTypeEnum.Romaji},
];

export const OptionsVocabularyActivityTranslation: OptionsI[] = [
  {label: 'JP -> ES', value: TranslationFlow.JP_ES},
  {label: 'ES -> JP', value: TranslationFlow.ES_JP},
];

export const OptionsVocabularyType: OptionsI[] = [
  {
    label: 'Casa',
    value: house,
  },
  {
    label: 'Aficiones',
    value: hobby,
  },
  {
    label: 'Comidas',
    value: food,
  },
  {
    label: 'Bebidas',
    value: drink,
  },
  {
    label: 'Día - Semana',
    value: dayWeek,
  },
  {
    label: 'Días - Numero',
    value: dayNumber,
  },
  {
    label: 'Paises',
    value: country,
  },
  {
    label: 'Colores',
    value: colors,
  },
  {
    label: 'Cuerpo',
    value: body,
  },
  {
    label: 'Lugares',
    value: places,
  },
  {
    label: 'Personas',
    value: people,
  },
  {
    label: 'Ordenes',
    value: orders,
  },
  {
    label: 'Profesiones',
    value: occupations,
  },
  {
    label: 'Objetos',
    value: objects,
  },
  {
    label: 'Números',
    value: numbers,
  },
  {
    label: 'Verbos',
    value: verbs,
  },
  {
    label: 'Sabores',
    value: taste,
  },
  {
    label: 'Adjetivos - Todos',
    value: adjectives.ikeiyoushi.concat(adjectives.nakeiyoushi),
  },
  {
    label: 'Adjetivos - Ikeiyoushi',
    value: adjectives.ikeiyoushi,
  },
  {
    label: 'Adjetivos - Nakeiyoushi',
    value: adjectives.nakeiyoushi,
  },
  {
    label: 'Animales',
    value: animals,
  },
  {
    label: 'Medios de transporte',
    value: transport,
  },
  {
    label: 'Tiempo',
    value: time,
  },
  {
    label: 'Familia - Formal',
    value: familyFormal,
  },
  {
    label: 'Familia - Informal',
    value: familyInformal,
  },
];

export const PATH = {
  HOME: 'home',
  VOCABULARY: 'vocabulary',
  ALPHABET: 'alphabet',
  PARTICLE: 'particle',
  KANJI: 'kanji',
  HIRAGANA: 'hiragana',
  KATAKANA: 'katakana',
  RESUME: 'resume',
};

export const FULL_ROUTE = {
  // ALPHABET
  kanji_act: `${PATH.ALPHABET}/${PATH.KANJI}`,
  hiragana_act: `${PATH.ALPHABET}/${PATH.HIRAGANA}`,
  katakana_act: `${PATH.ALPHABET}/${PATH.KATAKANA}`,
  kanji_resume: `${PATH.ALPHABET}/${PATH.KANJI}/${PATH.RESUME}`,
  hiragana_resume: `${PATH.ALPHABET}/${PATH.HIRAGANA}/${PATH.RESUME}`,
  katakana_resume: `${PATH.ALPHABET}/${PATH.KATAKANA}/${PATH.RESUME}`,
};

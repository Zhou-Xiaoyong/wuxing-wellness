export interface ElementInfo {
  slug: 'wood' | 'fire' | 'earth' | 'metal' | 'water';
  name: string;
  cn: string; // 木
  pinyin: string;
  organ: string;
  organCn: string;
  flavor: string;
  flavorCn: string;
  color: string;
  colorCn: string;
  season: string;
  emotion: string;
  emotionCn: string;
  accent: string; // hex used for theming
  summary: string;
  foods: string[];
  tips: string[];
}

export const elements: ElementInfo[] = [
  {
    slug: 'wood',
    name: 'Wood',
    cn: '木',
    pinyin: 'Mù',
    organ: 'Liver & Gallbladder',
    organCn: '肝胆',
    flavor: 'Sour',
    flavorCn: '酸',
    color: 'Green',
    colorCn: '青',
    season: 'Spring',
    emotion: 'Anger',
    emotionCn: '怒',
    accent: '#3f7d4f',
    summary:
      'Wood is the energy of growth, vision and upward movement. In the body it rules the liver — the strategist that keeps energy and emotion flowing smoothly.',
    foods: ['Leafy greens', 'Sour plum', 'Lemon', 'Sprouts', 'Vinegar', 'Mung bean', 'Rose tea'],
    tips: [
      'Eat more green, leafy vegetables in spring',
      'Protect your liver with regular, gentle movement',
      'Soften tight muscles with stretching and Qi Gong',
      'Watch irritability — it signals stagnant Wood energy',
    ],
  },
  {
    slug: 'fire',
    name: 'Fire',
    cn: '火',
    pinyin: 'Huǒ',
    organ: 'Heart & Small Intestine',
    organCn: '心小肠',
    flavor: 'Bitter',
    flavorCn: '苦',
    color: 'Red',
    colorCn: '赤',
    season: 'Summer',
    emotion: 'Joy (over-excitement)',
    emotionCn: '喜',
    accent: '#c0392b',
    summary:
      'Fire is warmth, connection and luminosity. It governs the heart — the seat of spirit and the spark behind charisma, love and joy.',
    foods: ['Bitter greens', 'Goji berry', 'Red dates', 'Turmeric', 'Dark chocolate', 'Beetroot', 'Chrysanthemum tea'],
    tips: [
      'Favor bitter foods to cool excess summer heat',
      'Protect the heart with calming evening routines',
      'Balance excitement with stillness and rest',
      'Notice anxiety and insomnia as Fire imbalance signals',
    ],
  },
  {
    slug: 'earth',
    name: 'Earth',
    cn: '土',
    pinyin: 'Tǔ',
    organ: 'Spleen & Stomach',
    organCn: '脾胃',
    flavor: 'Sweet',
    flavorCn: '甘',
    color: 'Yellow',
    colorCn: '黄',
    season: 'Late Summer',
    emotion: 'Worry / Pensiveness',
    emotionCn: '思',
    accent: '#c8922f',
    summary:
      'Earth is the center — stability, nourishment and care. It rules the spleen and stomach, the root of digestion and the soil of all energy.',
    foods: ['Sweet potato', 'Pumpkin', 'Millet', 'Dates', 'Oats', 'Carrot', 'Yam'],
    tips: [
      'Eat warm, cooked meals to support digestion',
      'Reduce raw and cold foods if digestion feels sluggish',
      'Step away from over-thinking with grounding rituals',
      'Regular meal times are the simplest Earth medicine',
    ],
  },
  {
    slug: 'metal',
    name: 'Metal',
    cn: '金',
    pinyin: 'Jīn',
    organ: 'Lungs & Large Intestine',
    organCn: '肺大肠',
    flavor: 'Pungent',
    flavorCn: '辛',
    color: 'White',
    colorCn: '白',
    season: 'Autumn',
    emotion: 'Grief / Letting go',
    emotionCn: '悲',
    accent: '#9aa3ad',
    summary:
      'Metal is structure, clarity and release. It governs the lungs — our intake of fresh energy — and the art of letting go, like trees dropping leaves.',
    foods: ['Garlic', 'Ginger', 'Pear', 'Onion', 'Almond', 'Radish', 'Cauliflower'],
    tips: [
      'Use pungent spices to open the lungs in autumn',
      'Practice deep breathing and fresh air',
      'Allow yourself to grieve and release',
      'Keep the intestines clear with fiber and water',
    ],
  },
  {
    slug: 'water',
    name: 'Water',
    cn: '水',
    pinyin: 'Shuǐ',
    organ: 'Kidneys & Bladder',
    organCn: '肾膀胱',
    flavor: 'Salty',
    flavorCn: '咸',
    color: 'Black / Blue',
    colorCn: '黑',
    season: 'Winter',
    emotion: 'Fear',
    emotionCn: '恐',
    accent: '#2c5f7c',
    summary:
      'Water is the deepest reserve — wisdom, rest and willpower. It rules the kidneys, the storehouse of vital essence and the source of winter stillness.',
    foods: ['Black bean', 'Walnut', 'Seaweed', 'Miso', 'Bone broth', 'Black sesame', 'Mulberry'],
    tips: [
      'Eat warming, slow-cooked foods in winter',
      'Protect your lower back and keep warm',
      'Honor rest — Water renews in stillness',
      'Notice exhaustion and fear as Water depletion signs',
    ],
  },
];

export const elementMap: Record<string, ElementInfo> = Object.fromEntries(
  elements.map((e) => [e.slug, e]),
);

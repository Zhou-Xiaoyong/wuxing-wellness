import type { ElementInfo } from './elements';

export interface QuizQuestion {
  element: ElementInfo['slug'];
  text: string;
}

// Five-element personality test: each statement maps to one element.
// Visitors rate agreement 1-5; the highest-scoring element is their dominant type.
export const personalityTest: QuizQuestion[] = [
  // Wood
  { element: 'wood', text: 'I am ambitious, driven and love to be first or best.' },
  { element: 'wood', text: 'I make decisions quickly and act with confidence.' },
  { element: 'wood', text: 'Under pressure I stay focused and push through challenges.' },
  { element: 'wood', text: 'When things move too slowly I become impatient or irritable.' },
  // Fire
  { element: 'fire', text: 'I am warm, expressive and love being around people.' },
  { element: 'fire', text: 'Others describe me as charismatic and enthusiastic.' },
  { element: 'fire', text: 'I feel things deeply and can swing from joy to anxiety.' },
  { element: 'fire', text: 'I enjoy being the center of attention.' },
  // Earth
  { element: 'earth', text: 'I care for others and often put their needs first.' },
  { element: 'earth', text: 'I am the "glue" that keeps my friend group or family together.' },
  { element: 'earth', text: 'I worry a lot and tend to overthink.' },
  { element: 'earth', text: 'I feel best when life is stable, harmonious and predictable.' },
  // Metal
  { element: 'metal', text: 'I am organized, precise and value structure.' },
  { element: 'metal', text: 'I prefer clear rules and dislike chaos.' },
  { element: 'metal', text: 'I can be reserved and keep my feelings to myself.' },
  { element: 'metal', text: 'Letting go of people or things is hard for me.' },
  // Water
  { element: 'water', text: 'I am reflective, independent and enjoy solitude.' },
  { element: 'water', text: 'I am curious about ideas, mysteries and the deeper meaning of things.' },
  { element: 'water', text: 'I would rather stay home with a book than attend a big party.' },
  { element: 'water', text: 'I am cautious and sometimes hold back from risk.' },
];

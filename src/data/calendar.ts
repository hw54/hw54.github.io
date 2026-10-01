export interface CalendarEntry {
  readonly year: number;
  readonly month: number;
  readonly location: string;
  readonly file: string;
}

export const calendar: readonly CalendarEntry[] = [
  { year: 2022, month: 9, location: '上海街头', file: '2022-09.jpg' },
];

export interface GalleryPhoto {
  readonly year: number;
  readonly month: number;
  readonly location: string;
  readonly file: string;
}

export const digital: readonly GalleryPhoto[] = [
  { year: 2022, month: 9, location: '新建筑', file: '20220918-01-new-buildings.jpg' },
  { year: 2022, month: 9, location: '纸片楼', file: '20220918-02-street-corner.jpg' },
  { year: 2022, month: 9, location: '废墟', file: '20220918-03-changing-city.jpg' },
  { year: 2022, month: 9, location: '施工', file: '20220918-04-construction.jpg' },
  { year: 2022, month: 9, location: '家具', file: '20220918-05-furniture.jpg' },
  { year: 2022, month: 9, location: '流浪猫', file: '20220918-06-street-cats.jpg' },
  { year: 2022, month: 9, location: '壁纸', file: '20220918-07-wall-details.jpg' },
  { year: 2022, month: 9, location: '竖排', file: '20220918-08-alley-light.jpg' },
];

export const analog: readonly GalleryPhoto[] = [];

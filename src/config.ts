export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const site = {
  name: 'Hins',
  nameZh: '',
  title: 'Hins · 摄影',
  description: 'Hins 的个人摄影网站，记录街巷、建筑与日常生活中的城市切面。',
} as const;

export const nav: readonly NavItem[] = [
  { label: '摄影作品', href: '/' },
  { label: '摄影日记', href: '/blog/photography' },
  { label: '每月一图', href: '/calendar' },
  { label: '关于', href: '/about' },
  { label: '联系', href: '/contact' },
  { label: '图片使用', href: '/license' },
];

export const social = {
  github: 'https://github.com/hw54',
} as const;

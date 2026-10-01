import type { APIRoute } from 'astro';
import { site as siteInfo, social } from '../config';

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('生成 llms.txt 需要配置站点地址。');
  const url = (path: string) => new URL(path, site).href;
  const body = `# ${siteInfo.name}

> ${siteInfo.description}

## 摄影
- [摄影作品](${url('/')}): 摄影作品与组照。
- [摄影日记](${url('/blog/photography')}): 摄影与城市生活的文字记录。
- [每月一图](${url('/calendar')}): 按月份整理的照片。

## 关于
- [关于](${url('/about')})
- [联系](${url('/contact')})
- [图片使用](${url('/license')}): 摄影作品保留所有权利。
- GitHub: ${social.github}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

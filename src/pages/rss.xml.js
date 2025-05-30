import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../data/site-config';
import { sortItemsByDateDesc } from '../utils/data-utils';

export async function GET(context) {
  const posts = (await getCollection('blog')).sort(sortItemsByDateDesc);

  return rss({
    title: siteConfig.title || '',
    description: siteConfig.description || '',
    site: context.site,
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.excerpt,
      link: `/blog/${item.id}/`,
      pubDate: item.data.publishDate.setUTCHours(0),
    })),
  });
}


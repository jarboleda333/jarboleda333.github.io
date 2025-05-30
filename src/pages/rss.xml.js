return rss({
    title: siteConfig.title || '',         // Vacío si no lo hay
    description: siteConfig.description || '', // Vacío si no lo hay
    site: context.site,
    items: posts.map((item) => ({
        title: item.data.title,
        description: item.data.excerpt,
        link: `/blog/${item.id}/`,
        pubDate: item.data.publishDate.setUTCHours(0),
    })),
});


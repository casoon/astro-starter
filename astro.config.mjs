import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(
    {
        server: { port: 8080 },
        site: 'https://www.changethis.com',
        integrations: [
            sitemap({
                changefreq: 'weekly',
                priority: 0.7,
                lastmod: new Date('2022-12-21')}),
            image({serviceEntryPoint: '@astrojs/image/sharp', cacheDir: "./.cache/image", logLevel: 'debug'}),
            compress({
                css: false,
                html: true,
                img: false,
                js: false,
                svg: false,
                logger: 0,
            })
        ],
    }
);

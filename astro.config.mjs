import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import alpine from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
    server: {
        port: 8080
    },
    site: 'https://www.changethis.com',
    integrations: [
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date('2022-12-21')
        }),
        alpine(),
        partytown(),
        playformCompress({
            CSS: false,
            HTML: false,
            Image: false,
            JavaScript: false,
            SVG: false
        })],
    output: "static"
});

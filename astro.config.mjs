import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Config partials
import { head } from "./src/config/head";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'useWordPress',
			logo: {
				src: "~/assets/logos/twf.svg",
				replacesTitle: true,
			  },
			head: head,
			social: {
				github: 'https://github.com/thewebforge/usewordpress',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Quick Start Guide', link: '/start-here/quick-start/' },
					],
				},
				{
					label: 'Hooks',
					autogenerate: { directory: 'hooks' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/styles.css',
			  ],
			  components: {
				// EditLink: './src/components/starlight/EditLink.astro',
				// Head: './src/components/starlight/Head.astro',
				// Hero: './src/components/starlight/Hero.astro',
				// MarkdownContent: './src/components/starlight/MarkdownContent.astro',
				// MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
				// TableOfContents: './src/components/starlight/TableOfContents.astro',
				// PageSidebar: './src/components/starlight/PageSidebar.astro',
				// Pagination: './src/components/starlight/Pagination.astro',
				SiteTitle: './src/components/starlight/SiteTitle.astro',
				// Search: './src/components/starlight/Search.astro',
				// Sidebar: './src/components/starlight/Sidebar.astro',
				// PageTitle: './src/components/starlight/PageTitle.astro',
			},
		}),
	],
});

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// git subtree push --prefix build/ origin gh-pages
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		paths: { assets: "", base: "/PERSONAL_PATH" },
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
            precompress: false,
		}),
	},
};

export default config;

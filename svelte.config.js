import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// npm run build
// firebase target:apply hosting target prtr-export , [target] is target name , [prtr-export] is target site
// firebase deploy
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	// preprocess: [preprocess({
	//     postcss: true
	// })],

	kit: {
		paths: { base: '' },
		adapter: adapter(),
		prerender: {
			// crawl: true,
			enabled: true,
			// onError: 'continue',
			default: true,
		},
	},
};

export default config;

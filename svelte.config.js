import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const BASE_PATH = process.env.BASE_PATH || '';

// git subtree push --prefix build/ origin gh-pages
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	// preprocess: [preprocess({
	//     postcss: true
	// })],

	kit: {
		paths: { assets: '', base: `${BASE_PATH}` },
		appDir: '_app',
		// browser: {
		// 	hydrate: false,
		// 	router: false,
		// },
		trailingSlash: 'always',
		adapter: adapter({
			out: 'build',
			pages: 'build',
			assets: 'build',
			precompress: false,
		}),
		files: {
			assets: 'static',
			routes: 'src/routes',
			template: 'src/app.html',
		},
		package: {
			dir: 'package',
			emitTypes: true,
			// excludes all .d.ts and files starting with _ as the name
			exports: (filepath) => !/^_|\/_|\.d\.ts$/.test(filepath),
			files: () => true,
		},
		routes: (filepath) =>
			!/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(filepath),
		prerender: {
			// crawl: true,
			enabled: true,
			// onError: 'continue',
			default: true,
		},
	},
};

export default config;

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'prtr-fresh-green': '#b1f4b4',
				'prtr-deep-blue': '#08274c',
				'prtr-undp-blue': '#0968B1',
				'prtr-healthy-blue': '#20AAD7',
				'prtr-air-blue': '#B6E8F8',
				'prtr-grey': '#C4C4C4',
				'prtr-disabled': '#8393a5',
				'prtr-border-purple': '#373746',
				'prtr-border-blue': '#08274C',
				'prtr-gradient-a': '#B6E8F8',
				'prtr-gradient-b': '#D4F5D5',
				'prtr-gradient-c': '#20AAD7',
			},
			fontFamily: {
				kanit: ['Kanit'],
				termtem: ['Termtem'],
				baijamjuree: ['BaiJamjuree'],
				anakotmai: ['Anakotmai'],
			},
			fontSize: {
				'title': '78px',
				'mini-title': '28px'
			},
			lineHeight: {
				'title': '90%',
			},
			screens: {
				'xs': '425px',
				'4xl': '1850px'
			},
			backgroundPosition: {
				'center-1': 'center',
				'center-2': 'center right -15rem',
				'center-3': 'center left 2.75rem',
			}
		},
	},
	plugins: [],
};

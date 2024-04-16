/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#fff',
			green: '#95FFD9',
			darkGreen: '#02422B',
			black: '#000',
			orange: '#FF9B53',
			gray: '#8b9090',
			A9A9A9: '#A9A9A9',
			grayOpacity05: 'rgba(211, 211, 211, 0.5);',
			grayOpacity: 'rgba(211, 211, 211, 1);',
			whiteOpacity: 'rgba(230, 230, 230, 0.208);',
		},
		extend: {
			backgroundImage: {
				'bg-btn-image': 'url(../btn-bg.svg)',
				'bg-btn-active': 'url(../btn-bg-active.svg)',
				'bg-header': 'url(../bg-header.png)',
				'double-bg-main':
					'url(../bg-header-1.svg),url(../bg-header-2.png), url(../bg-header-3.svg)',
				'double-bg-media':
					'url(../bg-header-1.svg),url(../double-bg-media.png), url(../bg-header-3.svg)',
				'double-bg-service':
					'url(../bg-header-1.svg),url(../bg-header-service-2.png), url(../bg-header-3.svg)',
				'double-bg-footer': 'url(../footer-bg-1.svg),url(../footer-bg-2.svg)',
				'logo-image': 'url(../logo.svg)',
				'logo-image-lg': 'url(../logo-2.svg)',
				'footer-bg': 'url(../footer-bg.svg)',
				'footer-mob-bg': 'url(../footer-mobile-bg.svg)',
				'about-block-border': 'url(../about-block-border.svg)',
				'green-elipse': 'url(../green-allipse.svg)',
				'green-bg-numbers': 'url(../green-bg-2.svg)',
				'faq-bg': 'url(../faq-bg.svg)',
				'blog-item': 'url(../blog-item-bg.png)',
				'track-bg-mobile': 'url(../track-bg-mobile.png)',
				'track-bg-desc': 'url(../track-bg-desc.png)',
			},
			fontFamily: {
				druk: ['druk', 'sans-serif'],
				ptMono: ['pt-mono'],
				kleemax: ['kleemax'],
			},
			backgroundPosition: {
				'max-left-bottom': '-150px 200px',
			},
			backgroundSize: {
				'80%': '80%',
			},
			listStyleType: {
				disc: 'disc',
			},
			variants: {
				// Определите, для каких состояний будут доступны эти стили
				extend: {
					listStyleType: ['responsive'],
				},
			},
		},
	},
	plugins: [],
}

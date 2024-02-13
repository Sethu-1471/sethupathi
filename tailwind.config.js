// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
	content: ['./index.html', './src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				primary: '#09B48B',
				secondary: '#2E384D',
				tertiary: '#F4F4F5',
				navbar: '#1E2431',
				text: '#522B65'
			},
		},
	},
	plugins: [],
});

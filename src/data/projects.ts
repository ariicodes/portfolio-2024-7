const projects = [
	// {
	// 	title: 'React Weather App',
	// 	description:
	// 		'A weather application that displays the current weather and forecast for a user’s location. Users can search for weather information in other cities and view the weather in different units of measurement.',
	// 	image: '/coming-soon.png',
	// 	techStack: ['TypeScript', 'React', 'NextJS', 'GraphQL'],
	// 	github: '',
	// 	live: '',
	// },
	{
		title: 'Shyne Weather App',
		description:
			'A weather application that consumes the OpenWeather API to display the current weather and forecast for a user’s location based on city or zip code. The app also displays an alert banner and modal with alerts for severe weather conditions when applicable.',
		image: '/shyne-weather.png',
		techStack: ['React', 'Tailwind CSS', 'OpenWeather API'],
		github: 'https://github.com/ariicodes/shyne-weather',
		live: 'https://shyne-weather.web.app/',
	},
	{
		title: 'Periodic Tables Reservation App',
		description:
			'A restaurant reservation application that allows users to view and make reservations. Admins can manage reservations and tables. The app features a dashboard with reservation and table utilization metrics.',
		image: '/periodic-tables.png',
		techStack: [
			'React',
			'Bootstrap',
			'Node.js',
			'Express',
			'Knex',
			'PostgreSQL',
		],
		github:
			'https://github.com/ariicodes/periodic-tables-restaurant-reservation',
		live: 'https://periodic-tables.ariicodes.com',
	},
	{
		title: 'Decoder Ring',
		description:
			'A collection of three ciphers: Caesar Shift, Polybius Square, and Substitution. Users can encode and decode messages using the selected cipher.',
		image: '/decoder-ring.png',
		techStack: ['JavaScript', 'Bootstrap', 'Mocha', 'Chai'],
		github: 'https://github.com/ariicodes/decoder-ring',
		live: 'https://decoder-ring.ariicodes.com/',
	},
	{
		title: 'Herb Shop E-Commerce with POS System',
		description:
			'An e-commerce platform for a herb shop with a POS system. Users can browse products with current inventory info, add them to their cart, and checkout. Admins can manage product inventory, orders, and customers. The POS system allows employees to process transactions in-store.',
		image: '/coming-soon.png',
		techStack: [
			'TypeScript',
			'React',
			'NextJs',
			'Node.js',
			'Express',
			'GraphQL',
			'MongoDB',
			'Stripe API',
		],
		github: 'https://github.com/ariicodes/bloom-n-balance',
		live: 'https://bloom-n-balance.vercel.app/',
	},
	{
		title: 'Jeopardy Inspired Game',
		description:
			'A Jeopardy Inspired game application. Users can select a category and difficulty level, and answer questions to earn points. The app features a leader board to track high scores.',
		image: '/coming-soon.png',
		techStack: [
			'TypeScript',
			'React',
			'NextJS',
			'GraphQL',
			'MongoDB',
			'Node.js',
			'Express',
		],
		github: '',
		live: '',
	},
];

export default projects;

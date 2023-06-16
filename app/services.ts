import { Service } from '@/types';

const servicesList: Array<Service> = [
	{
		title: 'Metal Braces',
		slug: 'metal_braces',
		linkTo: 'metal_braces',
		icon: '/IMG_5798.jpg',
		description:
			'Metal braces are considered the traditional form of braces. They are metal brackets that are fixed to your teeth throughout the treatment duration and connected together with a metal wire and colorful elastics. They are still extremely effective, safe, reliable and millions of people get straight teeth and beautiful smile using metal bracket',
	},

	{
		title: 'Ceramic Braces',
		slug: 'ceramic_transparent_braces',
		linkTo: 'ceramic_transparent_braces',
		icon: '/IMG_5802.jpg',
		description:
			'Ceramic braces are similar to  the traditional braces. They are made of tooth colored material that blends with your teeth to make them look invisible. Many adults prefer those type which are as effective and functional as the metal ones.',
	},

	{
		title: 'Clear Aligners',
		slug: 'clear_aligners',
		linkTo: 'clear_aligners',
		icon: '/IMG_5806.jpg',
		description:
			'Although clear aligners don’t look like braces, however they straighten the teeth without using brackets or wires. They are clear, removable and relatively comfortable.',
	},

	{
		title: 'Growth Modification',
		slug: 'growth_modification',
		linkTo: 'growth_modification',
		icon: '/groth.png',
		description:
			'The aim of growth modification is to guide the jaws to grow in the normal direction and at the proper pace. Problems such as narrow jaws or jaws that are sticking out are best managed at a young age. This early treatment is the foundation for healthy jaws with enough space to accommodate all permanent teeth in a proper fit giving your child a nice healthy smile.',
	},
];

export default servicesList;

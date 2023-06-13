import { Tips, TipsTypes } from '@/types';

const TipsList: Array<Tips> = [
	{
		title: 'Ceramic (transparent) Braces',
		slug: 'ceramic_transparent_braces',
		linkTo: 'ceramic_transparent_braces',
		icon: '/IMG_5799.jpg',
		description:
			'Similar to metal braces in their functionality and ability to move teeth efficiently to their desired positions, ceramic braces have the advantage of being completely transparent. These are the choice for adult patients who feel a bit uncomfortable to walk around with metal braces on.',
		type: TipsTypes.article,
	},

	{
		title: 'Growth Modification',
		slug: 'growth_modification',
		linkTo: 'growth_modification',
		icon: '/IMG_5804.jpg',
		description:
			'The aim of growth modification is to guide the jaws to grow in the normal direction and at the proper pace. Problems such as narrow jaws or jaws that are sticking out are best managed at a young age. This early treatment is the foundation for healthy jaws with enough space to accommodate all permanent teeth in a proper fit giving your child a nice healthy smile.',
		type: TipsTypes.news,
	},
	{
		title: 'Clear Aligners',
		slug: 'clear_aligners',
		linkTo: 'clear_aligners',
		icon: '/IMG_5806.jpg',
		description:
			'These are your first choice when you really want to get your teeth straightened with no one even knowing you are doing that. They are simply a series of removable transparent trays that can be taken out to eat and drink and then used again. Much more comfortable than braces and as efficient when chosen for the right case.',
		type: TipsTypes.video,
		externalLink: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
	},
	{
		title: 'Metal Braces',
		slug: 'metal_braces',
		linkTo: 'metal_braces',
		icon: '/IMG_5798.jpg',
		description:
			'Metal braces with wires and colored elastics are the classic form of orthodontic treatment. They are the preferred type of braces for teenagers who want to add some glamour to their teeth while getting the smile they are dreaming of.',
		type: TipsTypes.article,
	},
	{
		title: 'Lingual Braces',
		slug: 'lingual_braces',
		linkTo: 'lingual_braces',
		icon: '/IMG_5802.jpg',
		description:
			'Lingual braces are specially customized to fit the inner surface of your teeth. They are suitable for all cases, and are ideal for actors/actresses and public speakers.',
		type: TipsTypes.article,
	},
];

export default TipsList;

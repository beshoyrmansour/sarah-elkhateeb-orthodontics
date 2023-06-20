import { Tips, TipsTypes } from '@/types';

const TipsList: Array<Tips> = [
	{
		title: 'How to brush with braces',
		slug: 'how_to_brush_with_braces',
		linkTo: 'how_to_brush_with_braces',
		icon: '/File_000.png',
		description:
			'Brushing is very crucial while having braces to avoid plaque and decay. You should brush after every meal and snack for at least 3 minutes either using a manual or electric tooth brush.',
		type: TipsTypes.video,
		externalLink: 'https://www.youtube.com/watch?v=iWzccidNPVQ',
	},

	{
		title: 'How to use dental wax on braces',
		slug: 'how_to_use_dental_wax_on_braces',
		linkTo: 'how_to_use_dental_wax_on_braces',
		icon: '/how_to_use_dental_wax_on_braces.png',
		description: `Using the wax is very helpful if there is any sharp edge or loose bracket poking hurting your cheeks or lips.`,

		type: TipsTypes.video,
		externalLink: 'https://youtu.be/vAtqhlYSJFs',
	},
	{
		title: 'What to eat with braces',
		slug: 'what_to_eat_with_braces',
		linkTo: 'what_to_eat_with_braces',
		icon: '/File_002.png',
		description:
			'There are certain foods should be avoided while having braces like sticky food or very hard food. You can enjoy eating soft food specially after braces tightening.',
		type: TipsTypes.video,
		externalLink: 'https://youtu.be/vAtqhlYSJFs',
	},
];

export default TipsList;

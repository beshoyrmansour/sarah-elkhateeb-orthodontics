import { Tips, TipsTypes } from '@/types';

const TipsList: Array<Tips> = [
	{
		title: 'How to brush with braces',
		slug: 'how_to_brush_with_braces',
		linkTo: 'how_to_brush_with_braces',
		icon: '/File_000.png',
		description: 'What you need to brush your teeth with braces?',
		type: TipsTypes.video,
		externalLink: 'https://www.youtube.com/watch?v=iWzccidNPVQ',
	},

	{
		title: 'How to use dental wax on braces',
		slug: 'how_to_use_dental_wax_on_braces',
		linkTo: 'how_to_use_dental_wax_on_braces',
		icon: '/how_to_use_dental_wax_on_braces.png',
		description: `What you need to apply dental wax to braces?`,

		type: TipsTypes.video,
		externalLink: 'https://youtu.be/vAtqhlYSJFs',
	},
	{
		title: 'What to eat with braces',
		slug: 'what_to_eat_with_braces',
		linkTo: 'what_to_eat_with_braces',
		icon: '/File_002.png',
		description:
			'When you have braces, it’s important to eat soft, cold, or cooked foods that do not require much chewing or biting. Some examples are dairy products, soups, smoothies, eggs, oatmeal, pasta, rice, bread, vegetables, seafood, and fruits. You should avoid hard, crunchy, sticky, or chewy foods that can damage your braces or cause pain. You should also limit your sugar intake and brush your teeth after eating.',
		type: TipsTypes.video,
		externalLink: 'https://youtu.be/vAtqhlYSJFs',
	},
];

export default TipsList;

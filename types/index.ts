export type Service = {
	title: string;
	icon: string;
	description: string;
	linkTo: string;
	slug: string;
};

export enum TipsTypes {
	article = 'article',
	video = 'video',
	news = 'news',
}

export type Tips = {
	slug: string;
	title: string;
	icon: string;
	description: string;
	linkTo: string;
	type: TipsTypes;
	externalLink?: string;
	list?: Array<string>;
};

export type Testimonial = {
	content: string;
	name: string;
	imageUrl?: string;
};

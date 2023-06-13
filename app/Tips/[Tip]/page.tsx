import TipsList from '@/app/Tips';
import { Tips, TipsTypes } from '@/types';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	params: {
		Tip: string;
	};
};

const TipDetails = ({ params }: Props) => {
	console.log({ params });
	const Tip: Tips = {
		title: '',
		icon: '',
		description: '',
		linkTo: '',
		slug: '',
		type: TipsTypes.article,
		externalLink: '',
	};
	const selected = TipsList.find((_Tip) => _Tip.slug === params.Tip);
	if (selected) {
		Tip.title = selected.title;
		Tip.icon = selected.icon;
		Tip.description = selected.description;
		Tip.linkTo = selected.linkTo;
		Tip.slug = selected.slug;
		Tip.externalLink = selected.externalLink;
		Tip.type = selected.type;
	}
	const otherTips = TipsList.filter((_Tip) => _Tip.slug !== params.Tip);

	return (
		<div className="xs:p-3 mx-auto  mt-[8em] block min-h-[calc(100vh_-_18.5em)] min-h-screen max-w-screen-xl overflow-x-hidden lg:px-24 ">
			<div className=" mb-16 grid grid-flow-row-dense grid-cols-2 gap-6 rounded-xl bg-white p-6 lg:grid-cols-4">
				<div className="col-span-2">
					<div className="relative bg-white">
						<Image
							className="img-fluid mx-auto rounded-xl "
							src={Tip.icon}
							alt={Tip.title}
							width={1000}
							height={800}
							priority
						/>
						{Tip.type === TipsTypes.video && Tip.externalLink && (
							<Link href={Tip.externalLink}>
								<Image
									className=" stroke-3 absolute top-0 mb-3 h-full w-full rounded-lg bg-white/25 p-24 text-center hover:bg-teal-300/50"
									src="/play-button.svg"
									alt={Tip.title}
									width={100}
									height={60}
									priority
								/>
							</Link>
						)}
					</div>
				</div>
				<div className="col-span-2 flex flex-col  items-stretch justify-between lg:items-start">
					<div className="w-full">
						<h1 className="mb-3 flex w-full items-center justify-between text-4xl text-teal-600">
							<span> {Tip?.title} </span>
							<span className="fornt-black ml-auto  rounded-full bg-teal-600 px-2 py-1 text-base uppercase text-white">
								{Tip.type}
							</span>
						</h1>
						<p className="mb-8 text-xl text-teal-900 lg:mb-16">
							{Tip?.description}
						</p>
					</div>
					{/* <a href='tel:01004669848' className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
            Book Now 🤙
          </a> */}
				</div>
			</div>
			{/* otherTips */}
			<h2 className="mb-8  text-4xl font-bold text-teal-500 ">
				<span
					className="mt-2 w-auto rounded-bl-[20px] rounded-br-[150px]
         rounded-tl-[50px]
          rounded-tr-[90px]
           bg-teal-600
           px-12
        py-3 text-center font-bold text-white"
				>
					Other Tips
				</span>
			</h2>
			<div className="mb-16 grid grid-flow-row-dense grid-cols-2 gap-6 rounded-xl bg-white p-6 lg:grid-cols-4">
				{otherTips.map((otherTip) => (
					<>
						<Link
							href={`/Tips/${otherTip.slug}`}
							className="col-span-1 rounded-xl text-center hover:bg-teal-100"
						>
							<Image
								src={otherTip?.icon}
								className=" img-fluid mx-auto h-[150px] rounded-xl object-cover"
								alt="Dr.Sarah Elkhateeb instagram page"
								width={1000}
								height={800}
								priority
							/>
							<h1 className="text-2xl text-teal-600">
								{Tip?.title}
							</h1>
						</Link>
					</>
				))}
			</div>
		</div>
	);
};

export default TipDetails;

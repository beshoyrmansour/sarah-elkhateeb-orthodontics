import Image from 'next/image';
import React from 'react';
import { Tips, TipsTypes } from '../types';
import TipsList from '@/app/Tips';
import Link from 'next/link';

type Props = {};

const Tips = (props: Props) => {
	return (
		<div
			id="Tips"
			className="mb-32 rounded-bl-[100em] rounded-br-[800em] rounded-tl-[800em] rounded-tr-[200em] bg-white/[.26] pt-[10em]"
		>
			<h2 className="mb-24  text-4xl font-bold text-teal-500 ">
				<span
					className="mt-2 w-auto rounded-bl-[20px] rounded-br-[150px]
         rounded-tl-[50px]
          rounded-tr-[90px]
           bg-teal-600
           px-12
        py-3 text-center font-bold text-white"
				>
					Tips & Tricks
				</span>
			</h2>

			<div className="m-auto mb-32 grid justify-center text-center md:grid-cols-2 lg:mb-0 lg:grid-cols-2 lg:text-left ">
				{TipsList.map((Tip: Tips) => (
					<Link
						href={`/Tips/${Tip.slug}`}
						key={Tip.slug}
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-700 hover:bg-teal-50 "
						rel="noopener noreferrer"
					>
						<div className="relative bg-white">
							<Image
								className="w-100 mb-3 h-60 rounded-lg object-cover "
								src={Tip.icon}
								alt={Tip.title}
								width={500}
								height={300}
								priority
							/>
							{Tip.type === TipsTypes.video && (
								<Image
									className=" stroke-3 absolute top-0 mb-3 h-full w-full rounded-lg bg-white/25 p-16 text-center hover:bg-teal-300/50"
									src="/play-button.svg"
									alt={Tip.title}
									width={100}
									height={60}
									priority
								/>
							)}
						</div>
						<h2
							className={`mb-3 text-2xl font-semibold text-teal-600`}
						>
							{Tip.title}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						{/* <p className={`m-0  text-sm opacity-50`}>
							{Tip.description}
						</p> */}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Tips;

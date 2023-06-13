import servicesList from '@/app/services';
import { Service } from '@/types';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	params: {
		service: string;
	};
};

const ServiceDetails = ({ params }: Props) => {
	const service: Service = {
		title: '',
		icon: '',
		description: '',
		linkTo: '',
		slug: '',
	};
	const selected = servicesList.find(
		(_service) => _service.slug === params.service,
	);
	if (selected) {
		service.title = selected.title;
		service.icon = selected.icon;
		service.description = selected.description;
		service.linkTo = selected.linkTo;
		service.slug = selected.slug;
	}
	const otherServices = servicesList.filter(
		(_service) => _service.slug !== params.service,
	);

	return (
		<div className="xs:p-3 mx-auto  mt-[8em] block min-h-[calc(100vh_-_18.5em)] min-h-screen max-w-screen-xl overflow-x-hidden lg:px-24 ">
			<div className=" mb-16 grid grid-flow-row-dense grid-cols-2 gap-6 rounded-xl bg-white p-6 lg:grid-cols-4">
				<div className="col-span-2">
					<Image
						src={service?.icon}
						className="img-fluid mx-auto rounded-xl"
						alt="Dr.Sarah Elkhateeb instagram page"
						width={1000}
						height={800}
						priority
					/>
				</div>
				<div className="col-span-2 flex flex-col  items-stretch justify-between lg:items-start">
					<div>
						<h1 className="mb-3 text-4xl text-teal-600">
							{service?.title}
						</h1>
						<p className="mb-8 text-xl text-teal-900 lg:mb-16">
							{service?.description}
						</p>
					</div>
					<a
						href="tel:01004669848"
						className="rounded bg-teal-600 px-4 py-2 font-bold text-white hover:bg-teal-800"
					>
						Book Now 🤙
					</a>
				</div>
			</div>
			{/* otherServices */}
			<h2 className="mb-8  text-4xl font-bold text-teal-500 ">
				<span
					className="mt-2 w-auto rounded-bl-[20px] rounded-br-[150px]
         rounded-tl-[50px]
          rounded-tr-[90px]
           bg-teal-600
           px-12
        py-3 text-center font-bold text-white"
				>
					Other Services
				</span>
			</h2>
			<div className="mb-16 grid grid-flow-row-dense grid-cols-2 gap-6 rounded-xl bg-white p-6 lg:grid-cols-4">
				{otherServices.map((otherService) => (
					<>
						<Link
							href={`/services/${otherService.slug}`}
							className="col-span-1 rounded-xl text-center hover:bg-teal-100"
						>
							<Image
								src={otherService?.icon}
								className=" img-fluid mx-auto h-[150px] rounded-xl object-cover"
								alt="Dr.Sarah Elkhateeb instagram page"
								width={1000}
								height={800}
								priority
							/>
							<h1 className="text-2xl text-teal-600">
								{service?.title}
							</h1>
						</Link>
					</>
				))}
			</div>
		</div>
	);
};

export default ServiceDetails;

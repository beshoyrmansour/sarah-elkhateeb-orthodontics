import Image from 'next/image';
import React from 'react';
import { Testimonial } from '../types';
import TestimonialsList from '@/app/Testimonials';
import Link from 'next/link';

type Props = {};

const Testimonials = (props: Props) => {
	return (
		<div
			id="Testimonials"
			className="
    w-100
    mb-32
    pt-[10em] 
        "
		>
			<h2 className="mb-24  text-4xl font-bold text-teal-500 ">
				<span
					className="
        mt-2
        w-auto
        rounded-bl-[20px]
        rounded-br-[150px]
        rounded-tl-[50px]
        rounded-tr-[90px]
        bg-teal-600
        px-12
        py-3
        text-center
        font-bold
        text-white"
				>
					Happy patients
				</span>
			</h2>

			<div
				className="
      w-100
      m-auto
      mb-32
      flex
      justify-start
      overflow-x-auto
      text-center
      lg:mb-0
      lg:text-left"
			>
				{TestimonialsList.map(
					(testimonial: Testimonial, index: number) => (
						<div
							key={`testimonial__${index}`}
							className="group w-[300px] min-w-[300px] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-teal-700 hover:bg-teal-50"
							rel="noopener noreferrer"
						>
							<div className="relative bg-white">
								{testimonial.imageUrl && (
									<Image
										className="h-100 w-100 mb-3 rounded-lg object-cover "
										src={testimonial.imageUrl}
										alt={testimonial.content}
										width={500}
										height={500}
										priority
									/>
								)}
							</div>
							{/* <h2 className={`mb-3 `}>"{testimonial.content}"</h2>
							<p
								className={`m-0  text-xl font-semibold  text-teal-600 `}
							>
								{testimonial.name}
							</p> */}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default Testimonials;

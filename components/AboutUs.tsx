import Image from 'next/image';
import React from 'react';

type Props = {};

const AboutUs = (props: Props) => {
	return (
		<div
			id="AboutUs"
			className="mb-0 rounded-bl-[100em]  rounded-br-[800em] rounded-tl-[800em] rounded-tr-[200em] bg-white/[.26] pt-[10em]"
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
					Our specialist
				</span>
			</h2>

			<div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row-reverse">
				<div className="col-6 flex flex-col px-8">
					<div className="mb-6">
						<h2 className=" text-3xl text-teal-600">
							<b>Dr. Sarah</b> El Khateeb
						</h2>
						<p className="text-gray-500">Orthodontics</p>
					</div>
					<ul>
						<li className="mb-3">
							<p>
								.Dr. Sarah is an orthodontic specialist, she
								graduated from the Faculty of Oral & Dental
								medicine Cairo university in 2014 with honors.
							</p>
						</li>
						<li className="mb-3">
							<p>
								In 2015 she got her diploma from the Royal
								college of Surgeons in Edinburgh and became a
								member at the RCSED.
							</p>
						</li>
						<li className="mb-3">
							<p>
								A certified orthodontist with a Master's degree
								in Orthodontics & Dentofacial Orthopedics from
								Cairo University.
							</p>
						</li>
						<li className="mb-3">
							<p>
								A dynamic, detail-oriented & friendly person
								that manages to capture the hearts of her
								patients while giving them the beautiful smiles
								they are wishing for.
							</p>
						</li>
						<li className="mb-3 text-gray-500 ">
							<p>Keep smiling…keep shining</p>
						</li>
					</ul>
				</div>
				<Image
					className="col-6 self-end"
					src={'/drsarah.png'}
					alt="Dr Sarah el khateeb"
					width={400}
					height={600}
				/>
			</div>
		</div>
	);
};

export default AboutUs;

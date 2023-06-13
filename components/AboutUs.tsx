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
					About Us
				</span>
			</h2>

			<div className="flex w-full flex-col  items-start justify-between gap-2 md:flex-row">
				<p className="col-6 flex flex-col px-8">
					<h2 className="mb-6 text-3xl text-teal-600">
						<b>Dr. Sarah</b> El Khateeb
					</h2>
					<ul>
						<li className="mb-3">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Rem molestiae mollitia
								quaerat? Velit ut itaque minus molestias odio
								recusandae, accusamus adipisci reiciendis
								fugiat, doloremque consectetur, alias saepe
								nobis cupiditate ratione.
							</p>
						</li>
						<li className="mb-3">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Rem molestiae mollitia
								quaerat? Velit ut itaque minus molestias odio
								recusandae, accusamus adipisci reiciendis
								fugiat, doloremque consectetur, alias saepe
								nobis cupiditate ratione.
							</p>
						</li>
						<li className="mb-3">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Rem molestiae mollitia
								quaerat? Velit ut itaque minus molestias odio
								recusandae, accusamus adipisci reiciendis
								fugiat, doloremque consectetur, alias saepe
								nobis cupiditate ratione.
							</p>
						</li>
						<li className="mb-3">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Rem molestiae mollitia
								quaerat? Velit ut itaque minus molestias odio
								recusandae, accusamus adipisci reiciendis
								fugiat, doloremque consectetur, alias saepe
								nobis cupiditate ratione.
							</p>
						</li>
						<li className="mb-3">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Rem molestiae mollitia
								quaerat? Velit ut itaque minus molestias odio
								recusandae, accusamus adipisci reiciendis
								fugiat, doloremque consectetur, alias saepe
								nobis cupiditate ratione.
							</p>
						</li>
						<li className="mb-3">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Rem molestiae mollitia
								quaerat? Velit ut itaque minus molestias odio
								recusandae, accusamus adipisci reiciendis
								fugiat, doloremque consectetur, alias saepe
								nobis cupiditate ratione.
							</p>
						</li>
						<li className="mb-3">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Rem molestiae mollitia
								quaerat? Velit ut itaque minus molestias odio
								recusandae, accusamus adipisci reiciendis
								fugiat, doloremque consectetur, alias saepe
								nobis cupiditate ratione.
							</p>
						</li>
						<li className="mb-3">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Rem molestiae mollitia
								quaerat? Velit ut itaque minus molestias odio
								recusandae, accusamus adipisci reiciendis
								fugiat, doloremque consectetur, alias saepe
								nobis cupiditate ratione.
							</p>
						</li>
					</ul>
				</p>
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

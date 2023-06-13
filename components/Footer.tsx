import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-between bg-teal-50 pb-8 pt-8 text-center">
			<span className="w-100 flex flex-col items-start justify-around gap-16 px-5 lg:flex-row">
				<Link
					className="mb-5 flex flex-col  justify-center self-center"
					href={'/'}
				>
					<Image
						src="/logo_colors.svg"
						className="img-fluid mx-auto rounded-xl"
						alt="Dr.Sarah Elkhateeb instagram page"
						width={200}
						height={800}
						priority
					/>
				</Link>

				<div className="self-between mb-5 flex flex-col  items-start gap-3 md:flex-row md:items-center lg:flex-col  lg:items-start">
					<div className="mb-5 flex flex-col items-start text-center  md:items-center lg:items-start">
						<p className="my-1 text-lg font-bold text-teal-600">
							Contacts
						</p>
						<a
							href="tel:01004669848"
							className="text-md
							my-1 inline-block flex
              w-auto items-center
              justify-center rounded-[50px]  text-center align-middle font-semibold text-gray-600"
						>
							<Image
								src="/phone.svg"
								className="img-fluid"
								alt="Dr.Sarah Elkhateeb instagram page"
								width={25}
								height={25}
								priority
							/>{' '}
							<span className="semibold pl-1 "> 01004669848</span>
						</a>
						<p className="my-1 flex items-center justify-center font-semibold text-gray-600 ">
							<a
								href="mailto:sarah.elkhateeb@hotmail.com"
								className="align-center flex justify-center"
							>
								<Image
									src="/mail.svg"
									className="img-fluid"
									alt="Dr.Sarah Elkhateeb instagram page"
									width={25}
									height={25}
									priority
								/>
								<span className="semibold pl-1 ">
									{' '}
									sarah.elkhateeb@hotmail.com
								</span>
							</a>
						</p>
					</div>

					<div className="mb-5 flex flex-col items-start text-center md:items-center  lg:items-start">
						<p className="my-1 text-lg font-bold text-teal-600">
							Social Media
						</p>

						<a
							target="_blank"
							href="https://www.instagram.com/sarahelkhateeb.orthodontics/"
							className="my-1 flex items-center justify-center text-lg font-bold text-gray-600"
						>
							<Image
								src="/instagram_logo.svg"
								className="img-fluid"
								alt="Dr.Sarah Elkhateeb instagram page"
								width={25}
								height={25}
								priority
							/>
							<span className="semibold pl-1 ">
								{' '}
								/ sarahelkhateeb.orthodontics{' '}
							</span>
						</a>
						<a
							target="_blank"
							href="https://www.facebook.com/profile.php?id=100088667986356"
							className="my-1 flex items-center justify-center text-lg font-bold text-gray-600"
						>
							<Image
								src="/facebook_logo.svg"
								className="img-fluid"
								alt="Dr.Sarah Elkhateeb instagram page"
								width={25}
								height={25}
								priority
							/>
							<span className="semibold pl-1 ">
								{' '}
								/ sarahelkhateeb.orthodontics{' '}
							</span>
						</a>
					</div>
				</div>

				<div className="justify-cneter mb-5 flex flex-col items-start self-center text-center  md:items-center lg:items-start">
					<p className="my-1 text-lg font-bold text-teal-600">
						OPENING HOURS
					</p>
					<ul className="flex flex-col items-start justify-start md:items-center lg:items-start">
						<li className="my-1 text-gray-600 ">
							<b>Sheikh Zayed</b>: Sats - Thurs.: 1pm - 9pm
						</li>
						<li className="my-1 text-gray-600 ">
							<b>6th of October</b>: Sats - Thurs.: 1pm - 9pm
						</li>
						<li className="my-1 text-gray-600 ">
							<b>Dokki </b>: Sats - Thurs.: 1pm - 9pm
						</li>
						<li className="my-1 text-gray-600 ">
							<b>El Haram</b>: Sats - Thurs.: 1pm - 9pm
						</li>
						<li className="my-1 text-gray-600 ">
							<b>Maadi</b>: Sats - Thurs.: 1pm - 9pm
						</li>
						<li className="my-1 text-gray-600 ">
							<b>Heliopolis</b>: Sats - Thurs.: 1pm - 9pm
						</li>
					</ul>
				</div>
			</span>
			<div className="mt-2 text-gray-400">
				Copyright © 2023 Dr.Sarah Elkhateeb - All rights reserved <br />{' '}
				Designed By:{' '}
				<a target="_blank" href="http://digitalizers.co/">
					Digitalizers agency
				</a>
			</div>
		</div>
	);
};

export default Footer;

import React from 'react';
import Image from 'next/image';

type Props = {};

const Hero = (props: Props) => {
	return (
		<>
			<section
				className="hero relative flex w-full flex-col items-center justify-center pt-[8em]"
				id="Home"
			>
				<Image
					src="/bg.svg"
					alt="background"
					className="w-100 absolute top-[8em] z-0 max-h-[600px] min-w-[180vw]"
					width={3000}
					height={3000}
				/>
				<div className="z-10 flex min-h-[500px] w-full  flex-col items-center justify-center gap-2 md:flex-row">
					<div className=" d-flex flex-column justify-content-center align-items-center  col-12">
						<Image
							src="/logo_colors.svg"
							className="mx-auto mb-8 mt-4"
							alt="Dr sarah"
							width={300}
							height={300}
							priority
						/>
						<span className="mb-6 flex items-center justify-center text-center">
							<a
								href="tel:01004669848"
								className="
              text-md inline-block
               w-auto rounded-[50px] bg-teal-600 px-3 py-1 text-center align-middle font-bold text-white "
							>
								01004669848
							</a>
							<a
								target="_blank"
								href="https://www.instagram.com/sarahelkhateeb.orthodontics/"
								className="ml-2 "
							>
								<Image
									src="/instagram_logo.svg"
									className="img-fluid"
									alt="Dr sarah"
									width={45}
									height={45}
									priority
								/>
							</a>
							<a
								target="_blank"
								href="https://www.facebook.com/profile.php?id=100088667986356"
								className="ml-2 "
							>
								<Image
									src="/facebook_logo.svg"
									className="img-fluid"
									alt="Dr sarah"
									width={45}
									height={45}
									priority
								/>
							</a>
						</span>
						<p className="text-center text-5xl font-semibold text-gray-600">
							<b className="text-center text-teal-600 ">
								SLOGAN WILL BE HERE{' '}
							</b>
							SLOGAN WILL BE HERE
							<span className="font-thin">
								{' '}
								SLOGAN WILL BE HERE
							</span>
						</p>
					</div>
				</div>
				<div></div>
			</section>
		</>
	);
};

export default Hero;

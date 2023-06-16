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
					className="w-100 absolute top-[8em] z-0 max-h-[600px] min-w-[280vw]"
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

						<div className="text-center text-5xl font-semibold text-gray-600">
							<span className="font-thin"> Keep</span>
							<span className="font-semibold uppercase text-teal-500">
								{' '}
								smiling
							</span>
							<span className="font-thin"> keep</span>
							<span className="font-semibold uppercase text-teal-500">
								{' '}
								shining
							</span>
						</div>
						<div className=" text-semibold mx-auto my-3 max-w-[600px] px-12 text-center italic text-teal-800">
							Now you can get the smile of your dreams
							effortlessly
							<br />
							<span className="font-semibold not-italic">
								book your appointment now
							</span>
						</div>
						<span className="mb-6 hidden items-center justify-center text-center md:flex">
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
					</div>
				</div>
				<div className="align-center fixed bottom-4 right-0 z-20 flex flex-col justify-center rounded-xl bg-white py-2 md:hidden">
					<a
						target="_blank"
						href="https://www.instagram.com/sarahelkhateeb.orthodontics/"
						className="mx-auto px-1 pb-1"
					>
						<Image
							src="/phone.svg"
							className="img-fluid"
							alt="Dr sarah"
							width={30}
							height={30}
							priority
						/>
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/sarahelkhateeb.orthodontics/"
						className="mx-auto px-1 pb-1"
					>
						<Image
							src="/instagram_logo.svg"
							className="img-fluid"
							alt="Dr sarah"
							width={30}
							height={30}
							priority
						/>
					</a>
					<a
						target="_blank"
						href="https://www.facebook.com/profile.php?id=100088667986356"
						className="mx-auto px-1 pb-0"
					>
						<Image
							src="/facebook_logo.svg"
							className="img-fluid"
							alt="Dr sarah"
							width={30}
							height={30}
							priority
						/>
					</a>
				</div>
			</section>
		</>
	);
};

export default Hero;

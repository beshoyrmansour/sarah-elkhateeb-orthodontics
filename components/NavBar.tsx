'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ActiveLink from './ActiveLink';
// import { useRouter } from "next/router";

const NavBar = () => {
	const [hideMoblieList, setHideMoblieList] = React.useState(true);

	return (
		<div className="z-10 w-full max-w-5xl items-center justify-between bg-teal-600 font-mono text-sm  lg:flex">
			<nav className="fixed  left-0 top-0 z-50 w-full bg-teal-600">
				<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between bg-teal-600 p-4">
					<Link href="/" className="flex items-center">
						<Image
							src="/logo_colors_h.svg"
							width={350}
							height={250}
							alt="Dr.Sarah Elkhateeb Orthodontics logo"
							className="mr-3  hidden  h-12 lg:block"
						/>
						<Image
							src="/logo_colors_h.svg"
							width={250}
							height={50}
							alt="Dr.Sarah Elkhateeb Orthodontics logo"
							className="block w-48 lg:hidden"
						/>
					</Link>
					<button
						onClick={() => setHideMoblieList((prev) => !prev)}
						data-collapse-toggle="navbar-default"
						type="button"
						className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-teal-50 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-200 lg:hidden "
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-6 w-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
					<div
						className={`mt-2 bg-teal-600 ${
							hideMoblieList && 'hidden'
						} w-full lg:block lg:w-auto`}
						id="navbar-default"
					>
						<ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-teal-600 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 ">
							<li onClick={() => setHideMoblieList(true)}>
								<ActiveLink
									base="/"
									as="/"
									href="#Home"
									text="Home"
								/>
								{/* <Link href="#Home" className={`${isCurrent ? activeClasses : ''}  block py-2 pl-3 pr-4  lg:p-0`} aria-current="page">Home</Link> */}
							</li>
							<li onClick={() => setHideMoblieList(true)}>
								<ActiveLink
									base="services"
									href="#Services"
									text="Services"
								/>
								{/* <Link href="#Services" className={`${isCurrent ? activeClasses : inactiveClasses}  block py-2 pl-3 pr-4 rounded lg:p-0 `}>Services</Link> */}
							</li>
							<li onClick={() => setHideMoblieList(true)}>
								<ActiveLink
									base="Tips"
									href="#Tips"
									text="Tips & Tricks"
								/>
								{/* <Link href="#Tips" className={`${isCurrent ? activeClasses : inactiveClasses}  block py-2 pl-3 pr-4 rounded lg:p-0 `}>Tips & Tricks</Link> */}
							</li>
							<li onClick={() => setHideMoblieList(true)}>
								<ActiveLink
									base="Testimonials"
									href="#Testimonials"
									text="Happy patients"
								/>
							</li>
							<li onClick={() => setHideMoblieList(true)}>
								<ActiveLink
									base="AboutUs"
									href="#AboutUs"
									text="Our specialist"
								/>
							</li>
							<li onClick={() => setHideMoblieList(true)}>
								<Link
									href="tel:01004669848"
									className={` text block rounded py-2 pl-3 pr-4 font-bold text-teal-200 lg:p-0 
                `}
								>
									Book Now
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;

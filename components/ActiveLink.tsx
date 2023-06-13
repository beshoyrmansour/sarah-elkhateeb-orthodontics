import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
	href: string;
	as?: string;
	text: string;
	base: string;
};

const ActiveLink = ({ href, as, text, base, ...props }: Props) => {
	const pathname = usePathname();

	const activeClasses =
		'text-teal bg-teal-50 rounded lg:bg-transparent lg:text-teal-200';
	const inactiveClasses =
		'text-teal-100 hover:bg-teal-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-50';

	const paths = pathname.split('/');

	return (
		<Link
			href={href}
			as={as}
			className={`${
				pathname === '/' && pathname === base
					? activeClasses
					: pathname.includes(base) && paths[1] === base
					? activeClasses
					: inactiveClasses
			}  block rounded py-2 pl-3 pr-4 lg:p-0`}
		>
			{text}
		</Link>
	);
};
export default ActiveLink;

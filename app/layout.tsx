import NavBar from '@/components/NavBar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sarah Elkhateeb',
	description: 'Orthodontic specialist',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

import Tips from '@/components/Tips';
import Hero from '@/components/Hero';
import Services from '../components/Services';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';

export default function Home() {
	return (
		<main className="xs:p-3 mx-auto  block min-h-screen max-w-screen-xl overflow-x-hidden lg:px-24">
			<Hero />
			<Services />
			<Tips />
			<Testimonials />
			<AboutUs />
		</main>
	);
}

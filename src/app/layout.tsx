import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "Ariela Israel's Portfolio",
	description: 'Software engineering portfolio of Ariela Israel',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`bg-gray-950 text-[#FFFFF7] flex flex-col xl:flex-row w-screen h-dvh ${poppins.className}`}
			>
				<Nav />
				{children}
			</body>
		</html>
	);
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
			className='flex flex-col justify-between gap-5 h-dvh w-dvw p-12'
		>
			<div>
				<p className='text-xl xl:text-4xl font-extralight tracking-wide xl:w-2/3'>
					<span className='uppercase font-bold text-[#CFAFE7]/75 text-4xl xl:text-8xl'>
						Hey I'm Ariela!
					</span>
					<br />
					I'm a software engineer who specializes in creating innovative,
					user-friendly applications.
					<br />
					Take a look at{' '}
					<Link
						href={'/projects'}
						className='text-[#00F7F4]/80 font-medium uppercase transition-colors ease-in delay-100 hover:text-[#00F7F4]'
					>
						my work
					</Link>{' '}
					to discover how I can contribute to your team!
				</p>
			</div>
			<Image
				src='/secondary-logo-magenta.png'
				width={500}
				height={500}
				alt='ariicodes logo in pink'
				className='drop-shadow-lg xl:self-end'
			/>
		</motion.section>
	);
}

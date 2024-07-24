'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
	return (
		<section className='flex flex-col justify-center items-center h-screen w-screen bg-gray-950'>
			<motion.div
				initial={{ opacity: 1, rotate: 0 }}
				animate={{ opacity: [0, 1, 0], rotate: 360 }}
				transition={{ duration: 3, repeat: Infinity }}
			>
				<Image
					src='/logo-mark-cyan.png'
					width={400}
					height={400}
					alt='logo mark'
					priority
				/>
			</motion.div>
		</section>
	);
}

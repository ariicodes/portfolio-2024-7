'use client';

import Title from '@/components/Title';
import { motion } from 'framer-motion';

export default function NotFound() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 3 }}
			className='flex flex-col justify-between gap-5 h-dvh w-dvw xl:ml-12 mt-4 xl:mt-0 p-12'
		>
      <Title title='404Not Found' sliceNum={3} />
		</motion.section>
	);
}

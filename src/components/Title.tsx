'use client';

import { useScroll, useTransform, motion } from 'framer-motion';

const Title = ({ title, sliceNum }: { title: string; sliceNum?: number }) => {
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 600], [1, 0.25]);

	const titleSlice1 = title.slice(0, sliceNum);
	const titleSlice2 = title.slice(sliceNum);

	return (
		<motion.h1
			style={{ opacity }}
			className='z-20 fixed right-0 bottom-0 text-[#F364B4] text-right text-8xl xl:text-[12rem] uppercase font-black xl:self-end leading-[5rem] xl:leading-[10rem] p-6 bg-gradient-to-r from-transparent to-gray-950'
		>
			{title.length <= 5 ? (
				title
			) : (
				<>
					<span className='text-white'>{titleSlice1}</span>
					<br />
					{titleSlice2}
				</>
			)}
		</motion.h1>
	);
};

export default Title;

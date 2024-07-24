'use client';

import Title from '@/components/Title';
import Link from 'next/link';
import skills from '@/data/skills';
import SkillsCard from '@/components/SkillsCard';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 3 }}
			className='flex flex-col justify-between gap-5 h-dvh w-dvw xl:ml-12 mt-4 xl:mt-0 p-12'
		>
			<div className='pb-28 xl:pb-56'>
				<div className='text-md xl:text-2xl font-light leading-5'>
					<p>
						I am a Thinkful/Chegg Skills Software Engineering alumna with a
						passion for merging logic and creativity. I specialize in
						JavaScript/TypeScript, React, HTML, CSS, Bootstrap, and Tailwind
						CSS, and excel at enhancing user engagement through intuitive
						designs.{' '}
					</p>
					<br />
					<p>
						My experience includes leading mobile-first application development,
						improving project efficiency, and utilizing the Adobe Creative Suite
						to streamline graphic design processes. Additionally, I freelance as
						a UI and graphic designer, consistently refining my skills to stay
						ahead in the dynamic tech landscape.
					</p>
					<br />
					<p>
						{' '}
						I am ready to contribute my unique blend of technical expertise and
						creative flair to your team. If you’re looking for a versatile and
						innovative software engineer dedicated to excellence,{' '}
						<Link
							href={'contact'}
							className='text-[#00F7F4]/80 font-medium transition-colors ease-in delay-100 hover:text-[#00F7F4]'
						>
							let’s connect
						</Link>
						.
					</p>
				</div>
				<div className='py-4'>
					<h2 className='text-4xl uppercase text-[#CFAFE7] font-bold text-center mb-4 tracking-wider'>
						Skills
					</h2>
					<ul className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-4 xl:text-xl *:bg-white/5 *:rounded-lg text-center'>
						{skills.map(skill => (
							<SkillsCard
								key={skill.title}
								title={skill.title}
								items={skill.items}
							/>
						))}
					</ul>
				</div>
			</div>
			<Title title='about' />
		</motion.section>
	);
}

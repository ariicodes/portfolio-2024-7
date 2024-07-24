'use client';

import { motion } from 'framer-motion';
import Title from '@/components/Title';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';

export default function Projects() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 3 }}
			className='flex flex-col justify-between gap-5 h-dvh w-dvw xl:ml-12 mt-4 xl:mt-0 p-12'
		>
			<div className='pb-48 xl:pb-56'>
				<div className='py-4'>
					<ul className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-4 xl:text-xl *:bg-white/5 *:rounded-lg text-center'>
						{projects.map(project => (
							<ProjectCard key={project.title} project={project} />
						))}
					</ul>
				</div>
			</div>
			<Title title='projects' sliceNum={3} />
		</motion.section>
	);
}

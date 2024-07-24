import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
	title: string;
	description: string;
	image: string;
	techStack: string[];
	github: string;
	live: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
	const { title, description, image, techStack, github, live } = project;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 3 }}
			className='flex flex-col gap-4 xl:w-1/3 '
		>
			<div className='flex flex-col gap-3'>
				<h3 className='text-2xl font-medium uppercase bg-white/5 p-2 shadow-md'>
					{title}
				</h3>
				<div className='flex gap-4 justify-center'>
					{github.length <= 0 && live.length <= 0 ? (
						<>
							<p className='text-[#00F7F4]'>Links Coming Soon...</p>
						</>
					) : (
						<>
							<Link
								href={github}
								target='_blank'
								rel='noreferrer'
								className='text-[#00F7F4] hover:text-[#CFAFE7] transition-colors ease-in delay-100 uppercase'
							>
								Repo
							</Link>
							<Link
								href={live}
								target='_blank'
								rel='noreferrer'
								className='text-[#00F7F4] hover:text-[#CFAFE7] transition-colors ease-in delay-100 uppercase'
							>
								Live Link
							</Link>
						</>
					)}
				</div>
				<p className='text-sm font-extralight leading-tight px-2'>
					{description}
				</p>
			</div>
			<Image width={500} height={500} src={image} alt={title} />
			<div className='flex gap-2 flex-wrap p-2'>
				{techStack.map(tech => (
					<span
						key={tech}
						className='bg-[#332443] uppercase rounded-lg px-2 py-1 text-xs'
					>
						{tech}
					</span>
				))}
			</div>
		</motion.div>
	);
};

export default ProjectCard;

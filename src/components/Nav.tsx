'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='justify-self-start uppercase xl:h-screen xl:w-2/12 xl:border-r-4 border-[#F364B4]/25 xl:pt-12 flex flex-col'>
			{/* FOR SMALLER SCREENS BELOW */}
			<div className='flex flex-col xl:hidden z-10 absolute w-screen bg-gray-950'>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
						transition={{ duration: 1, ease: 'easeInOut' }}
					>
						{isOpen && (
							<ul className='flex flex-col divide-y-[.5px] divide-white/25 *:py-6 *:ml-8 border-b-4 border-[#F364B4]/25 xl:border-0 xl:hidden'>
								<li>
									<Link href='/' onClick={handleToggle}>
										Home
									</Link>
								</li>
								<li>
									<Link href='/about' onClick={handleToggle}>
										About
									</Link>
								</li>
								<li>
									<Link href='/projects' onClick={handleToggle}>
										Projects
									</Link>
								</li>
								<li>
									<Link href='/contact' onClick={handleToggle}>
										Contact
									</Link>
								</li>
							</ul>
						)}
					</motion.div>
				</AnimatePresence>
				<button
					className='self-end my-3 mr-9 text-[#00F7F4] block xl:hidden'
					onClick={handleToggle}
				>
					{isOpen ? 'close' : 'menu'}
				</button>
			</div>
			{/* FOR LARGER SCREENS BELOW */}
			<ul className='xl:flex flex-col divide-y-[.5px] divide-white/25 *:py-6 *:ml-8 border-b-4 border-[#F364B4]/25 xl:border-0 hidden'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/projects'>Projects</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

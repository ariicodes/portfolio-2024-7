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
		<nav className='justify-self-start uppercase xl:w-2/12 border-[#F364B4]/25 flex flex-col'>
			{/* FOR SMALLER SCREENS BELOW */}
			<div className='flex flex-col xl:hidden z-10 fixed w-screen bg-gray-950'>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
						transition={{ duration: 1, ease: 'easeInOut' }}
					>
						{isOpen && (
							<ul className='flex flex-col divide-y-[.5px] divide-white/25 *:py-6 *:ml-8 border-b-4 border-[#F364B4]/25 xl:border-0 xl:hidden'>
								<Link href='/' onClick={handleToggle}>
									<li>Home</li>
								</Link>
								<Link href='/about' onClick={handleToggle}>
									<li>About</li>
								</Link>
								<Link href='/projects' onClick={handleToggle}>
									<li>Projects</li>
								</Link>
								<Link href='/contact' onClick={handleToggle}>
									<li>Contact</li>
								</Link>
							</ul>
						)}
					</motion.div>
				</AnimatePresence>
				<button
					className='self-end my-5 mr-9 text-[#00F7F4] block xl:hidden'
					onClick={handleToggle}
				>
					{isOpen ? 'close' : 'menu'}
				</button>
			</div>
			{/* FOR LARGER SCREENS BELOW */}
			<div className='fixed h-screen xl:border-r-4 xl:w-2/12 border-[#F364B4]/25'>
				<ul className='xl:flex flex-col divide-y-[.5px] divide-white/25 *:py-6 *:ml-8 border-b-4 xl:border-0 hidden'>
					<Link href='/'>
						<li>Home</li>
					</Link>
					<Link href='/about'>
						<li>About</li>
					</Link>
					<Link href='/projects'>
						<li>Projects</li>
					</Link>
					<Link href='/contact'>
						<li>Contact</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;

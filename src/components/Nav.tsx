'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='justify-self-start uppercase xl:h-screen xl:w-2/12 xl:border-r-4 border-[#F364B4]/25 xl:pt-12 flex flex-col'
		>
			{isOpen && (
				<motion.ul
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className='flex flex-col divide-y-[.5px] divide-white/25 *:py-6 *:ml-8 border-b-4 border-[#F364B4]/25 xl:border-0 xl:hidden'
				>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/contact'>Projects</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</motion.ul>
			)}
			{/* FOR LARGER SCREENS BELOW */}
			<ul className='xl:flex flex-col divide-y-[.5px] divide-white/25 *:py-6 *:ml-8 border-b-4 border-[#F364B4]/25 xl:border-0 hidden'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
			<motion.button
				whileTap={{ scale: 0.5 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.8 }}
				className='self-end mt-6 mr-9 text-[#00F7F4] block xl:hidden'
				onClick={handleToggle}
			>
				{isOpen ? 'close' : 'view menu'}
			</motion.button>
		</motion.nav>
	);
};

export default Nav;

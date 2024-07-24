'use client';

import Title from '@/components/Title';
import { motion } from 'framer-motion';

export default function Contact() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 3 }}
			className='flex flex-col justify-between gap-5 h-dvh w-dvw xl:ml-12 mt-4 xl:mt-0 p-12'
		>
			<div className='pb-48 xl:pb-56'>
				<form
					action='https://formspree.io/f/mzbwgkwj'
					method='POST'
					className='bg-white/5 flex flex-col gap-2 rounded-lg'
				>
					<div className='flex flex-col xl:flex-row gap-4 p-2 xl:p-4'>
						<div className='p-2 flex flex-col gap-4 grow'>
							<div className='flex flex-col gap-1'>
								<label htmlFor='name' className='font-medium text-xl'>
									Name <span className='text-[#F364B4]'>*</span>
								</label>
								<input
									type='text'
									name='name'
									id='name'
									className='form-input font-light bg-white/5 p-2 rounded-md text-lg focus:caret-[#F364B4] focus:border-[#F364B4] focus:ring-[#F364B4]'
									required
								/>
							</div>
							<div className='flex flex-col gap-1'>
								<label htmlFor='phone' className='font-medium text-xl'>
									Phone <span className='text-[#F364B4]'>*</span>
								</label>
								<input
									type='tel'
									name='phone'
									id='phone'
									className='form-input font-light bg-white/5 p-2 rounded-md text-lg focus:caret-[#F364B4] focus:border-[#F364B4] focus:ring-[#F364B4]'
									required
								/>
							</div>
							<div className='flex flex-col gap-1'>
								<label htmlFor='email' className='font-medium text-xl'>
									Email <span className='text-[#F364B4]'>*</span>
								</label>
								<input
									type='email'
									name='email'
									id='email'
									className='form-input font-light bg-white/5 p-2 rounded-md text-lg focus:caret-[#F364B4] focus:border-[#F364B4] focus:ring-[#F364B4]'
									required
								/>
							</div>
						</div>
						<div className='flex flex-col gap-1 grow p-2'>
							<label
								htmlFor='reason-for-contacting'
								className='font-medium text-xl'
							>
								Reason for Contacting <span className='text-[#F364B4]'>*</span>
							</label>
							<textarea
								name='reason-for-contacting'
								id='reason-for-contacting'
								className='form-textarea font-light bg-white/5 p-2 rounded-md text-lg focus:caret-[#F364B4] focus:border-[#F364B4] focus:ring-[#F364B4]'
								placeholder={`Please provide a brief description\nEx: I would like to discuss a potential career opportunity.`}
								rows={7}
								required
							/>
						</div>
					</div>
					<button
						type='submit'
						className='bg-[#00F7F4]/85 text-black font-bold text-xl p-2  rounded-b-lg hover:bg-[#F364B4] transition-colors ease-in delay-100 shadow-md'
					>
						Submit
					</button>
				</form>
			</div>
			<Title title='contact' sliceNum={3} />
		</motion.section>
	);
}

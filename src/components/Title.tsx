const Title = ({ title, sliceNum }: { title: string; sliceNum?: number }) => {
	const titleSlice1 = title.slice(0, sliceNum);
	const titleSlice2 = title.slice(sliceNum);

	return (
		<h1 className='bg-gray-950 w-screen xl:w-10/12 z-20 fixed right-0 bottom-0 text-[#F364B4] text-right text-8xl xl:text-[12rem] uppercase font-black xl:self-end leading-[5rem] xl:leading-[10rem] p-6'>
			{title.length <= 5 ? (
				title
			) : (
				<>
					<span className='text-white'>{titleSlice1}</span>
					<br />
					{titleSlice2}
				</>
			)}
		</h1>
	);
};

export default Title;

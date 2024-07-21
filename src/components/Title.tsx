const Title = ({ title, sliceNum }: { title: string; sliceNum: number }) => {
	const titleSlice1 = title.slice(0, sliceNum);
	const titleSlice2 = title.slice(sliceNum);

	return (
		<h1 className='text-white/25 drop-shadow-lg text-right text-8xl xl:text-[12rem] uppercase font-black xl:self-end leading-[5rem] xl:leading-[10rem]'>
			{title.length < 5 ? (
				title
			) : (
				<>
					{titleSlice1}
					<br />
					<span className='text-[#F364B4]/25'>{titleSlice2}</span>
				</>
			)}
		</h1>
	);
};

export default Title;

const SkillsCard = ({ title, items }: { title: string; items: string[] }) => {
	return (
		<div className='*:p-2 xl:w-3/12'>
			<li className='bg-white/5 font-medium shadow-md text-xl uppercase'>
				{title}
			</li>
			<ul className='*:py-1'>
				{items.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default SkillsCard;

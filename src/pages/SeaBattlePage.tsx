import { RiShip2Fill } from 'react-icons/ri'

const SeaBattlePage = () => {
	return (
		<div className='w-screen h-screen bg-custom-pattern bg-white bg-custom-pattern-size bg-custom-pattern-pos'>
			<div className='flex justify-center items-center gap-20'>
				<div className='w-[300px] h-[300px] mt-20 border-2 border-black grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] justify-items-center gap-x-0 gap-y-0'>
					{[...Array(100)].map((_, index) => (
						<div
							key={index}
							className='flex items-center justify-center w-[29px] h-[29px] text-center border border-black'
						>
							{index % 4 === 0 ? <RiShip2Fill /> : ''}
						</div>
					))}
				</div>
				<div className='w-[300px] h-[300px] mt-20 border-2 border-black grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] gap-x-0 gap-y-0'>
					<div className='w-[30px] h-[30px] text-center border border-black'>
						C
					</div>
				</div>
			</div>
		</div>
	)
}

export default SeaBattlePage

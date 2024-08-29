import React from 'react'
import SeaNumbers from './SeaNumbers'
import SeaLetters from './SeaLetters'
import Cell from './Cell'
import { observer } from 'mobx-react-lite'
import { IShips } from '../../types/types'

const Board: React.FC<{ arr: IShips[]; isEnemy?: boolean }> = observer(
	({ arr, isEnemy }) => {
		return (
			<div className='relative w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mt-20 border border-black grid grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)] justify-items-center gap-x-0 gap-y-0'>
				{arr.map((item, index) => (
					<Cell item={item} isEnemy={isEnemy} key={index} />
				))}
				<SeaNumbers />
				<SeaLetters />
			</div>
		)
	}
)

export default Board

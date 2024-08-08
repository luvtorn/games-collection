import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import { gallowsStore } from '../../stores/GallowsStore'

const Gallows = observer(() => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const { attempts } = gallowsStore

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas?.getContext('2d')

		if (ctx && canvas) {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.strokeStyle = '#00008B' // Dark Blue color
			ctx.lineWidth = 4
			ctx.lineCap = 'round'
			ctx.lineJoin = 'round'

			// Base
			if (attempts > 0) {
				ctx.beginPath()
				ctx.moveTo(20, 280)
				ctx.quadraticCurveTo(70, 300, 120, 280) // Base with curve
				ctx.stroke()

				// Left vertical pole
				ctx.beginPath()
				ctx.moveTo(70, 280)
				ctx.quadraticCurveTo(60, 200, 70, 50) // Left pole with curve
				ctx.stroke()

				// Top horizontal pole
				ctx.beginPath()
				ctx.moveTo(70, 50)
				ctx.quadraticCurveTo(140, 30, 200, 50) // Top pole with curve
				ctx.stroke()

				// Rope
				ctx.beginPath()
				ctx.moveTo(200, 50)
				ctx.lineTo(200, 70)
				ctx.stroke()
			}

			// Draw the man based on the number of wrong guesses
			if (attempts > 1) {
				// Head
				ctx.beginPath()
				ctx.arc(200, 92, 20, 0, Math.PI * 2)
				ctx.lineWidth = 2
				ctx.stroke()

				// Eyes
				ctx.beginPath()
				ctx.moveTo(190, 82)
				ctx.lineTo(195, 87)
				ctx.moveTo(195, 82)
				ctx.lineTo(190, 87)
				ctx.moveTo(205, 82)
				ctx.lineTo(210, 87)
				ctx.moveTo(210, 82)
				ctx.lineTo(205, 87)
				ctx.stroke()

				// Mouth
				ctx.beginPath()
				ctx.arc(200, 100, 7, 0, Math.PI, true)
				ctx.stroke()
			}
			if (attempts > 2) {
				// Body
				ctx.beginPath()
				ctx.moveTo(200, 112)
				ctx.quadraticCurveTo(195, 120, 200, 170) // Base with curve
				ctx.stroke()
			}
			if (attempts > 3) {
				// Left arm
				ctx.beginPath()
				ctx.moveTo(200, 130)
				ctx.lineTo(170, 150)
				ctx.stroke()
			}
			if (attempts > 4) {
				// Right arm
				ctx.beginPath()
				ctx.moveTo(200, 130)
				ctx.lineTo(230, 150)
				ctx.stroke()
			}
			if (attempts > 5) {
				// Left leg
				ctx.beginPath()
				ctx.moveTo(200, 170)
				ctx.lineTo(180, 220)
				ctx.stroke()
			}
			if (attempts > 6) {
				// Right leg
				ctx.beginPath()
				ctx.moveTo(200, 170)
				ctx.lineTo(220, 220)
				ctx.stroke()
			}
		}
	}, [attempts])

	return <canvas className='mx-auto' ref={canvasRef} width='300' height='300' />
})

export default Gallows

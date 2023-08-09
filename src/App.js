import { useState } from 'react'
import './App.css'
import Calc from './calc/Calc'
import './button.css'
import { evaluate } from 'mathjs'

function App(){
	const [text, SetText] = useState('0')

	const [onswer, SetOnswer] = useState('...')
	const [operator, SetOperator] = useState(false)

	const [disabled, setDisabled] = useState(false)

	const operation = ['/', '*', '-', '+', '.']

	
	function number(e){
		let a = e.target.value

		if(a === undefined){
			return 
		}
		else{
			if(text === '0'){
				SetText((prev) => prev = a)
				setDisabled(false)
				console.log(e.target.value)
			}
			else{
				SetText((prev) => prev + a)
				setDisabled(false)
				console.log(e.target.value)
			}
		}
	}
	
	function numberOP(e){
		let a = e.target.value
		let b = operation.includes(a)


		if(a === '='){
			let c = evaluate(text)
			SetOnswer((prev) => prev = c)
		}
		if(a === '⌫'){
			if(text.length === 1){
				return SetText((prev) => prev = '0')
			}
			else{
				let c = text.substring(0, text.length - 1)
				if(disabled === true){
					SetText((prev) => prev = c)
					setDisabled(false)
			}
			else{
				SetText((prev) => prev = c)
			}
			}
			
			
		}
		if(a === 'C'){
			SetText((prev) => prev = '0')
			return SetOnswer((prev) => prev = '...')
			
		}
		if(a === undefined){
			return
		}
		else{
			if(b === true){
				if(disabled === true){
					return console.log('операции заблокированы')
				}
				else{
					if(text === '0'){
						return
					}
					else{
						SetText((prev) => prev + a)
						setDisabled(true)
						console.log(e.target.value)
					}
				}
			}
		}
	}

  	return (
  <div className="App">
      <div className="block">
		<div className="pad">
			<div className="calc">
				<div className="input">{text}</div>
				<div className="answer">{onswer}</div>
				<div className="numblock"></div>
					<div className='numblock_operation'>
						<div className='numbers1_1'
						disabled={disabled}
						value={"example"}
						onClick={e => numberOP(e, "value")}
						>
							<button value={'C'} id="C" className="number operetor">C</button>
							<button value={'/'} id="÷" className="number">÷</button>
							<button value={'*'} id="×" className="number">×</button>
							<button value={'⌫'} id="⌫" className="number  operetor">⌫</button>
						</div>
						<div className='numbers1_2'
						disabled={disabled}
						value={"example"}
						onClick={e => numberOP(e, "value")}
						>
						<button value={'-'} id="minus" className="number">-</button>
						<button value={'+'} id="plus" className="number">+</button>
						<button value={'.'} id="point" className="number operetor">.</button>
						<button value={'='} id="whitespace" className="number  operetor">=</button>
						</div>
					</div>
					<div className="numbers"
					value={"example"}
					onClick={e => number(e, "value")}
					>
						<button value={'1'} id="one" className="number">1</button> 
						<button value={'2'} id="two" className="number">2</button>
						<button value={'3'} id="three" className="number">3</button>
						<button value={'4'} id="four" className="number">4</button>
						<button value={'5'} id="five" className="number">5</button>
						<button value={'6'} id="six" className="number">6</button>
						<button value={'7'} id="seven" className="number">7</button>
						<button value={'8'} id="eight" className="number">8</button>
						<button value={'9'} id="nine" className="number">9</button>
						<button value={'0'} id="zero" className="number">0</button>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default App

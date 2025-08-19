import { useState } from 'react';


export default function LudoBoard(){
	let[Moves , setMoves] = useState({blue:0, yellow:0, pink:0, red:0});
	let blueMoves = () => {
		setMoves((prevMoves) =>{
			return {...prevMoves, blue: prevMoves.blue + 1}
		})
	}
	let yellowMoves = () => {
		setMoves((prevMoves) =>{
			return {...prevMoves, yellow: prevMoves.yellow + 1}
		})
	}
	let pinkMoves = () => {
		setMoves((prevMoves) =>{
			return {...prevMoves, pink: prevMoves.pink + 1}
		})
	}
	let redMoves = () => {
		setMoves((prevMoves) =>{
			return {...prevMoves, red: prevMoves.red + 1}
		})
	}

	return (
		<div>
			<p>blue Moves : {Moves.blue}</p>
			<button onClick={blueMoves} style = {{backgroundColor : "skyblue", color : "black"}}>+1</button>
			<p>yellow Moves : {Moves.yellow}</p>
			<button onClick={yellowMoves} style = {{backgroundColor : "yellow", color : "black"}}>+1</button>
			<p>pink Moves : {Moves.pink}</p>
			<button onClick={pinkMoves} style = {{backgroundColor : "pink", color : "black"}}>+1</button>
			<p>red Moves : {Moves.red}</p>
			<button onClick={redMoves} style = {{backgroundColor : "red", color : "black"}}>+1</button>
		</div>
	)
}
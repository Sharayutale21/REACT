export default function Price({oldPrice , newPrice}){
	let oldStyles = {
		textDecoration : "line-through",
		color: "red",
	}
	let newStyles = {
		fontWeight: "bold",
		color: "green",
		fontSize: "1.2em",
	}

	let styles={
		backgroundColor: "#e0c367",
		height : "30px",
		borderBottomLeftRadius : "14px",
		borderBottomRightRadius : "14px",
	}
	return (
		<div style = {styles}>
			<span style={oldStyles}>{oldPrice}</span>
			&nbsp;
			&nbsp;
			<span style={newStyles}>{newPrice}</span>
		</div>
	)
}
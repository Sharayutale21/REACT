import "./Product.css"

function Product({title , price}) {
	let isDiscount = price > 30000;
	let styles = {backgroundColor: isDiscount ? "skyblue": "", padding: "10px", margin: "10px", borderRadius: "5px"};	
	return (
	<div className="Product" style={styles}>
	<h3 >{title}</h3>
	<p>Price : {price}</p>
	{isDiscount && <p>Discount of 5%</p>}
	</div>
	);
}

export default Product;
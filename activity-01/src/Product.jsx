import "./Product.css"
import Price from './Price.jsx';

function Product({title , idx}) {
	let oldPrices = ["12,465", "15,000", "25,000","1699"];
	let newPrices = ["10,000", "12,000", "20,000" , "999"];
	let Description=["8,000 DPI", "intutive surface", "designed for ipad pro", "wireless"];

	return (
	<div className="Product"  >
		<h4>{title}</h4>
		<p>{Description[idx]}</p>
		<Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
	</div>
	);
}

export default Product;

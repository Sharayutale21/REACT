import Product from './Product.jsx';



function ProductTab(){
	let styles = {
		display: "flex",
		flexWrap : "wrap",
		justifyContent: "center",
		alignItems: "center",
		gap: "20px",
	};
	return(
	<div style={styles}>
		
		<Product title="Logitech MX Master" idx={0}/>
		<Product title="Apple pencil (2nd Gen)" idx={1}/>
		<Product title="Zebronics transformer" idx={2}/>
		<Product title="Petronics toad 23" idx={3}/>
	</div>
	 );
	
}

export default ProductTab;
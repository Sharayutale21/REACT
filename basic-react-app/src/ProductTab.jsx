import Product from './Product.jsx';

function ProductTab(){
	return(
	<>
		<Product title="Phone" price={30000}/>
		<Product title="Laptop" price={50000} />
		<Product title="Pen" price={10} />
		

	</>
	 );
}

export default ProductTab;
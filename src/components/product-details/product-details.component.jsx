import { Wrapper } from "../../layout-components/wrapper/wrapper.component"
import { ProductDetailsContainer } from "../product-details-container/product-details-container.component";
import { RelatedProducts } from "../related-products/related-products.component";
import { ShopTopPane } from "../shop-top-pane/shop-top-pane.component";

const productNavData = {
	rootPageText: "SHOP",
	subPageText: "corduroy 5L"
}

export const ProductDetails = () => {
	return (
		<Wrapper>
			<ShopTopPane navText={productNavData} />
			<ProductDetailsContainer />
			<RelatedProducts />
		</Wrapper>
	);
};
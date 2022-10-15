import { ShopProduct } from "../shop-product/shop-product.component";
import { ShopProductsDisplayStyled } from "./shop-products-display.styles"



export const ShopProductsDisplay = () => {
	return (
		<ShopProductsDisplayStyled>
			<ShopProduct />
			<div class="shop-pagination-buttons-div">
				<div class="shop-pagination-buttons">
					<button class="SP-button spb-active">1</button>
					<button class="SP-button">2</button>
					<button class="SP-button">3</button>
					<div class="SP-more-button">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<button class="SP-button">126</button>
				</div>
			</div>
		</ShopProductsDisplayStyled>
	);
}
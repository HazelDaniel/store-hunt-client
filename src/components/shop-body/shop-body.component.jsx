import { ShopProductsDisplay } from "../shop-products-display/shop-products-display.component"
import { ShopBodyStyled } from "./shop-body.styles"


export const ShopBody = () => {

	return (
		<ShopBodyStyled>
			<ShopProductsDisplay />
			{/* shopsidepane */}

		</ShopBodyStyled>
	)
}
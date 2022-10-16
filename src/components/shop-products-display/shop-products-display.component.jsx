import { ShopProduct } from "../shop-product/shop-product.component";
import { ShopProductsDisplayStyled, PaginationButtonsDivStyled, ShopPaginationButtonStyled, ShopLoadMoreButtonStyled } from "./shop-products-display.styles";

export const ShopProductsDisplay = () => {
	return (
		<ShopProductsDisplayStyled>
			<ShopProduct />
			<ShopProduct />
			<PaginationButtonsDivStyled>
				<div class="shop-pagination-buttons">
					<ShopPaginationButtonStyled class="spb-active">1</ShopPaginationButtonStyled>
					<ShopPaginationButtonStyled>2</ShopPaginationButtonStyled>
					<ShopPaginationButtonStyled>3</ShopPaginationButtonStyled>
					<ShopLoadMoreButtonStyled>
						<span></span>
						<span></span>
						<span></span>
					</ShopLoadMoreButtonStyled>
					<ShopPaginationButtonStyled>126</ShopPaginationButtonStyled>
				</div>
			</PaginationButtonsDivStyled>
		</ShopProductsDisplayStyled>
	);
};

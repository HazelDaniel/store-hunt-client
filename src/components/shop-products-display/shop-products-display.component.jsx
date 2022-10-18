import { ShopProduct } from "../shop-product/shop-product.component";
import { ShopProductsDisplayStyled, PaginationButtonsDivStyled, ShopPaginationButtonStyled, ShopLoadMoreButtonStyled } from "./shop-products-display.styles";

export const ShopProductsDisplay = () => {
	return (
		<ShopProductsDisplayStyled>
			<ShopProduct ratings={3} />
			<ShopProduct ratings={4} />
			<PaginationButtonsDivStyled>
				<div className="shop-pagination-buttons">
					<ShopPaginationButtonStyled className="spb-active">1</ShopPaginationButtonStyled>
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

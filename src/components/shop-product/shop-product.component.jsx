import { RatingDiv } from "../rating-div/rating-div.component";
import { ShopProductStyled } from "./shop-product.styles";

export const ShopProduct = () => {
	return (
		<ShopProductStyled>
			<div class="SPD-top">
				<div class="SPD-image-div">
					<img src="IMAGES/product/product-1.jpg" alt="" />
					<div class="SPD-top-cta-div">
						<div>
							<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C-7.53427 4.7355 3.56164 -3.24799 8 1.314C12.4384 -3.24799 23.5343 4.7355 8 15Z" fill="#D3D3D3" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div class="SPD-content">
				<div class="SPD-content-cta-div">
					+ Add to cart
					<div class="SPD-content-colors-div">
						<span id="C-4878FC"></span>
						<span id="C-CD1613"></span>
						<span id="C-2BCBD6"></span>
					</div>
				</div>
				<RatingDiv ratings={4} />
				<p class="SPDC-name">Tennis X</p>
				<p class="SPDC-price">$67.24</p>
			</div>
		</ShopProductStyled>
	);
};

import { CustomSelect } from "../custom-select/custom-select.component";
import { ShopTopDivStyled } from "./shop-top-div.styles";


export const ShopTopDiv = () => {
	return (
		<ShopTopDivStyled>
			<p class="shop-results-count-text">Showing 1-12 of 126 results</p>
			<div class="shop-filter-div">
				<span>sort by price:</span>
				<CustomSelect />
			</div>
		</ShopTopDivStyled>
	);
}
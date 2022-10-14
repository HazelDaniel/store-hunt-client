import { HotSalesStyled } from "./hot-sales-section.styles";




export const HotSales = () => {
	return (
		<HotSalesStyled >
			<p class="hot-sales-section-title">HOT<span>SALES</span></p>
			<div class="hot-sales-section-wrapper">
				<div class="HSS-side-text-div">
					<img src="IMAGES/home/hot-sale-side-text.svg" alt="" />
				</div>
				<div class="HSS-display">
					<button class="HSS-cta">SHOP NOW</button>
					<img src="IMAGES/home/goggle-removebg.png" alt="" class="HSS-image" />
					<p class="HSS-product-name">BLU VISION</p>
				</div>
				<span class="HSS-float big"></span><span class="HSS-float small"></span><span class="HSS-float small"></span><span class="HSS-float"></span>
			</div>
		</HotSalesStyled>
	)
};
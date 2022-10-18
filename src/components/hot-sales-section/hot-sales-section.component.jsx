import { HotSalesStyled } from "./hot-sales-section.styles";

export const HotSales = () => {
	return (
		<HotSalesStyled>
			<p className="hot-sales-section-title">
				HOT<span>SALES</span>
			</p>
			<div className="hot-sales-section-wrapper">
				<div className="HSS-side-text-div">
					<img src="IMAGES/home/hot-sale-side-text.svg" alt="" />
				</div>
				<div className="HSS-display">
					<button className="HSS-cta">SHOP NOW</button>
					<img src="IMAGES/home/goggle-removebg.png" alt="" className="HSS-image" />
					<p className="HSS-product-name">BLU VISION</p>
				</div>
				<span className="HSS-float big"></span>
				<span className="HSS-float small"></span>
				<span className="HSS-float small"></span>
				<span className="HSS-float"></span>
			</div>
		</HotSalesStyled>
	);
};

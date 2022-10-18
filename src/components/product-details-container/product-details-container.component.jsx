import { RatingDiv } from "../rating-div/rating-div.component";
import { ProductDetailsContainerStyled } from "./product-details-container.styles";

export const ProductDetailsContainer = () => {
	return (
		<ProductDetailsContainerStyled>
			<div className="product-top-wrapper">
				<div className="product-wrapper-decorator"></div>
				<div className="product-previews-div">
					<div className="product-preview-div">
						<img src="IMAGES/shop-details/thumb-1.png" alt="" className="PPD-image" />
					</div>
					<div className="product-preview-div">
						<img src="IMAGES/shop-details/thumb-2.png" alt="" className="PPD-image" />
					</div>
					<div className="product-preview-div active">
						<img src="IMAGES/shop-details/thumb-3.png" alt="" className="PPD-image" />
					</div>
				</div>
				<div className="product-view-div">
					<img src="IMAGES/shop-details/product-big.png" alt="" className="PVD-image" />
				</div>
			</div>
			<div className="product-bottom-wrapper">
				<div className="product-visual-description-wrapper">
					<p className="product-name">CURDUROY 5L</p>
					<div className="products-ratings-div">
						<span>Reviews</span>
					<RatingDiv ratings={4} />
					</div>
					<div className="product-price-div">
						<p className="product-price">$250.00</p>
						<del className="cancelled-price">
							<i>$320.00</i>
						</del>
					</div>
					<p className="product-brief-details">
						Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
						with placket.
					</p>
					<div className="product-visual-details-divs">
						<div className="PVD-div">
							<span className="PVD-title">Size:</span>
							<ul>
								<li className="product-size-list">XXL</li>
								<li className="product-size-list">S</li>
								<li className="product-size-list">L</li>
							</ul>
						</div>
						<div className="PVD-div">
							<span className="PVD-title">Color:</span>
							<ul>
								<li className="product-color-list"></li>
								<li className="product-color-list"></li>
							</ul>
						</div>
						<div className="PVD-div">
							<span className="PVD-title">Quantity:</span>
							<ul>
								<li className="">3</li>
							</ul>
						</div>
					</div>

					<div className="product-text-details-divs">
						<div className="PTD-div">
							<span className="PTD-title">Product Id:</span>
							<ul>
								<li>89548573</li>
							</ul>
						</div>
						<div className="PTD-div">
							<span className="PTD-title">Category:</span>
							<ul>
								<li>Men</li>
							</ul>
						</div>
						<div className="PTD-div">
							<span className="PTD-title">Tags:</span>
							<ul>
								<li>Wears</li>
								<li>Brown</li>
							</ul>
						</div>
					</div>
					<div className="product-cta-buttons">
						<button className="product-cta-button secondary">ADD TO WISHLIST</button>
						<button className="product-cta-button primary">ADD TO CART</button>
					</div>
				</div>
				<div className="product-text-description-wrapper">
					<p className="PTD-title">DESCRIPTION</p>
					<p className="PTD-text">
						The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known or incorporative approach.
						Furthermore, one should not forget that components of efforts of the formal review of opportunities has proved to be reliable in the scope of the general features and
						possibilities of the outline design stage. Up to a certain time, the capability of the arguments and claims can partly be used for the matters of peculiar interest. It may
						reveal how the participant evaluation sample remotely complete failure of the supposed theory what is conventionally known as valuable information. Let's consider, that any
						essential component can partly be used for the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.
					</p>
				</div>
			</div>
		</ProductDetailsContainerStyled>
	);
};

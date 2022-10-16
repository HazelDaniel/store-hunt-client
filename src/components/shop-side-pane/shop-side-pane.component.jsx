import { useEffect } from "react"
import { useReducer } from "react"
import { initialShopSidePaneState, shopSidePaneReducer, __openSidePane, __toggleSidePane } from "../../reducers/shop-side-pane.reducer"
import { ShopSearchBoxStyled, ShopSidePaneContainerStyled, ShopSidePaneStyled, ShopSideTabTogglerStyled } from "./shop-side-pane.styles"

const handleWindowResize = (dispatch,action) => {
	window.addEventListener("resize", function () {
		if (this.innerWidth < 1095) return;
		dispatch(action);
	})
}

export const ShopSidePane = () => {
	const [sidePaneState, sidePaneDispatch] = useReducer(shopSidePaneReducer, initialShopSidePaneState, (state) => state);
	useEffect(() => {
		handleWindowResize(sidePaneDispatch, __openSidePane());
	}, []);
	return (
		<ShopSidePaneStyled $closed={window.innerWidth >= 1095 ? false : sidePaneState.sidePaneOpened ? false : !sidePaneState.sidePaneOpened ? true : false}>
			<ShopSidePaneContainerStyled>
				<ShopSearchBoxStyled>
					<span className="search-icon">
						<svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M21.9375 10.9687C21.9375 4.91088 17.0266 0 10.9687 0C4.91088 0 0 4.91088 0 10.9687C0 17.0266 4.91088 21.9375 10.9687 21.9375C13.3964 21.9375 15.6398 21.1489 17.4568 19.8138L17.4553 19.8149C17.5051 19.8824 17.5605 19.947 17.6216 20.0081L24.1193 26.5057C24.7783 27.1648 25.8467 27.1648 26.5057 26.5057C27.1648 25.8467 27.1648 24.7783 26.5057 24.1193L20.0081 17.6216C19.947 17.5605 19.8824 17.5051 19.8149 17.4553C21.1493 15.6386 21.9375 13.3957 21.9375 10.9687ZM10.9687 20.25C5.84286 20.25 1.6875 16.0946 1.6875 10.9687C1.6875 5.84286 5.84286 1.6875 10.9687 1.6875C16.0946 1.6875 20.25 5.84286 20.25 10.9687C20.25 16.0946 16.0946 20.25 10.9687 20.25Z"
							/>
						</svg>
					</span>
					<input type="search" name="" id="" placeholder="search for your product here" />
				</ShopSearchBoxStyled>
				<div className="SSPM-section first">
					<div className="SSPM-accordion">
						<p className="SSPM-section-title">CATEGORIES</p>
						<span className="SSPM-section-toggle">
							<svg viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.959606 0.578856L4.19038 3.80963C4.29552 3.91477 4.29552 4.08523 4.19038 4.19038L0.959606 7.42114C0.854465 7.52629 0.683997 7.52629 0.578856 7.42114C0.473715 7.316 0.473715 7.14554 0.578856 7.04039L3.61925 4L0.578856 0.959606C0.473715 0.854465 0.473715 0.683997 0.578856 0.578856C0.683997 0.473715 0.854465 0.473715 0.959606 0.578856Z"
									fill="#08090A"
								></path>
							</svg>
						</span>
					</div>
					<ul className="SSPM-section-list">
						<li>MEN(210)</li>
						<li>WOMEN(150)</li>
						<li>HATS(100)</li>
						<li>KIDS(100)</li>
						<li>BAGS(100)</li>
						<li>SNEAKERS (100)</li>
						<li>JACKETS (100)</li>
					</ul>
				</div>
				<div className="SSPM-section">
					<div className="SSPM-accordion">
						<p className="SSPM-section-title">BRANDING</p>
						<span className="SSPM-section-toggle">
							<svg viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.959606 0.578856L4.19038 3.80963C4.29552 3.91477 4.29552 4.08523 4.19038 4.19038L0.959606 7.42114C0.854465 7.52629 0.683997 7.52629 0.578856 7.42114C0.473715 7.316 0.473715 7.14554 0.578856 7.04039L3.61925 4L0.578856 0.959606C0.473715 0.854465 0.473715 0.683997 0.578856 0.578856C0.683997 0.473715 0.854465 0.473715 0.959606 0.578856Z"
									fill="#08090A"
								></path>
							</svg>
						</span>
					</div>
					<ul className="SSPM-section-list">
						<li>LOUIS VUITTON</li>
						<li>CAVALLI</li>
						<li>NIKE</li>
					</ul>
				</div>
				<div className="SSPM-section">
					<div className="SSPM-accordion">
						<p className="SSPM-section-title">FILTER PRICE</p>
						<span className="SSPM-section-toggle">
							<svg viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.959606 0.578856L4.19038 3.80963C4.29552 3.91477 4.29552 4.08523 4.19038 4.19038L0.959606 7.42114C0.854465 7.52629 0.683997 7.52629 0.578856 7.42114C0.473715 7.316 0.473715 7.14554 0.578856 7.04039L3.61925 4L0.578856 0.959606C0.473715 0.854465 0.473715 0.683997 0.578856 0.578856C0.683997 0.473715 0.854465 0.473715 0.959606 0.578856Z"
									fill="#08090A"
								></path>
							</svg>
						</span>
					</div>
					<ul className="SSPM-section-list">
						<li>$0.00 - $50.00</li>
						<li>$50.00 - $100.00</li>
						<li>$100.00 - $150.00</li>
					</ul>
				</div>
				<div className="SSPM-section">
					<div className="SSPM-accordion">
						<p className="SSPM-section-title">SIZE</p>
						<span className="SSPM-section-toggle">
							<svg viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.959606 0.578856L4.19038 3.80963C4.29552 3.91477 4.29552 4.08523 4.19038 4.19038L0.959606 7.42114C0.854465 7.52629 0.683997 7.52629 0.578856 7.42114C0.473715 7.316 0.473715 7.14554 0.578856 7.04039L3.61925 4L0.578856 0.959606C0.473715 0.854465 0.473715 0.683997 0.578856 0.578856C0.683997 0.473715 0.854465 0.473715 0.959606 0.578856Z"
									fill="#08090A"
								></path>
							</svg>
						</span>
					</div>
					<ul className="SSPM-section-list size-list">
						<li className="active">XXL</li>
						<li>S</li>
						<li>XL</li>
						<li>L</li>
					</ul>
				</div>
				<div className="SSPM-section">
					<div className="SSPM-accordion">
						<p className="SSPM-section-title">COLORS</p>
						<span className="SSPM-section-toggle">
							<svg viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.959606 0.578856L4.19038 3.80963C4.29552 3.91477 4.29552 4.08523 4.19038 4.19038L0.959606 7.42114C0.854465 7.52629 0.683997 7.52629 0.578856 7.42114C0.473715 7.316 0.473715 7.14554 0.578856 7.04039L3.61925 4L0.578856 0.959606C0.473715 0.854465 0.473715 0.683997 0.578856 0.578856C0.683997 0.473715 0.854465 0.473715 0.959606 0.578856Z"
									fill="#08090A"
								></path>
							</svg>
						</span>
					</div>
					<ul className="SSPM-section-list colors-list">
						<li id="C-4878FC"></li>
						<li id="C-CD1613"></li>
						<li id="C-2BCBD6"></li>
						<li id="C-000000"></li>
					</ul>
				</div>
				<div className="SSPM-section">
					<div className="SSPM-accordion">
						<p className="SSPM-section-title">TAGS</p>
						<span className="SSPM-section-toggle">
							<svg viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M0.959606 0.578856L4.19038 3.80963C4.29552 3.91477 4.29552 4.08523 4.19038 4.19038L0.959606 7.42114C0.854465 7.52629 0.683997 7.52629 0.578856 7.42114C0.473715 7.316 0.473715 7.14554 0.578856 7.04039L3.61925 4L0.578856 0.959606C0.473715 0.854465 0.473715 0.683997 0.578856 0.578856C0.683997 0.473715 0.854465 0.473715 0.959606 0.578856Z"
									fill="#08090A"
								></path>
							</svg>
						</span>
					</div>
					<ul className="SSPM-section-list tags-list">
						<li className="SSPM-tag">PRODUCT</li>
						<li className="SSPM-tag">WOMAN</li>
						<li className="SSPM-tag">HATS</li>
					</ul>
				</div>
			</ShopSidePaneContainerStyled>
			<ShopSideTabTogglerStyled
				$closed={window.innerWidth >= 1095 ? false : sidePaneState.sidePaneOpened ? false : !sidePaneState.sidePaneOpened ? true : false}
				onClick={() => {
					if (window.innerWidth >= 1095) return;
					sidePaneDispatch(__toggleSidePane());
				}}
			>
				<svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.9123 2.91144C22.3245 2.67988 21.6097 2.8676 21.3159 3.33071L14.1764 14.5807C14.0089 14.8446 14.0089 15.1553 14.1764 15.4192L21.3159 26.6692C21.6097 27.1323 22.3245 27.32 22.9123 27.0885C23.5001 26.8569 23.7383 26.2938 23.4444 25.8307L16.5711 15L23.4444 4.16923C23.7383 3.70612 23.5001 3.14298 22.9123 2.91144Z"
						fill="#08090A"
					/>
				</svg>
			</ShopSideTabTogglerStyled>
		</ShopSidePaneStyled>
	);
}
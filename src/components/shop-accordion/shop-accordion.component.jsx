

export const ShopAccordion = ({children,titleText}) => {
	return (
		<div className="SSPM-accordion">
			<p className="SSPM-section-title">{titleText }</p>
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
	);
}
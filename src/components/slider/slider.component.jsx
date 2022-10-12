import { SliderStyled } from "./slider.styles";

export const Slider = () => {
	return (
		<SliderStyled className="slider s--ready">
			<div className="slider__slides">
				<div className="slider__slide s--active">
					<div className="slider__slide-content">
						<h3 className="slider__slide-subheading">SUMMER COLLECTION</h3>
						<h2 className="slider__slide-heading">
							<span>Fall - Winter Collections 2022</span>
						</h2>
						<div className="slider__slide-shop-now-cta">
							SHOP NOW
							<span>&RightArrow;</span>
						</div>
					</div>
					<div className="slider__slide-parts">
						<div className="slider__slide-part">
							<div
								className="slider__slide-part-inner"
								style={{
									backgroundImage: `url(${window.location.origin}/IMAGES/hero-bg-mobile.svg)`,
								}}
							></div>
						</div>
						<div className="slider__slide-part">
							<div
								className="slider__slide-part-inner"
								style={{
									backgroundImage: `url(${window.location.origin}/IMAGES/hero-bg-mobile.svg)`,
								}}
							></div>
						</div>
						<div className="slider__slide-part">
							<div
								className="slider__slide-part-inner"
								style={{
									backgroundImage: `url(${window.location.origin}/IMAGES/hero-bg-mobile.svg)`,
								}}
							></div>
						</div>
						<div className="slider__slide-part">
							<div
								className="slider__slide-part-inner"
								style={{
									backgroundImage: `url(${window.location.origin}/IMAGES/hero-bg-mobile.svg)`,
								}}
							></div>
						</div>
					</div>
					<div className="slider-hero-image-div">
						<div className="slider-hero-image-circle"></div>
						<img src={`${window.location.origin}/IMAGES/home/hero-men.png`} alt="" className="slider-hero-image" />
					</div>
				</div>
			</div>
		</SliderStyled>
	);
};

import styled, { css } from "styled-components";
import { debug, makeAbsoluteBottomRightDiv, makeAbsoluteTopDiv, makeColFlexCenter, makeColFlexEnd, makeColFlexStart, makeFullSizeBlock, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart, makeUnSelectableTextDiv, removeScrollBar } from "../../styles/styles";

export const _makeCenteredDivSize = css`
		width: 15rem;
		margin: 0 auto;
		${makeRowFlexStart};
		overflow: hidden;
		min-height: 2rem;
		height: max-content;
`;
const _makeProductCenteredGrid = css`
		margin: 2rem auto;
		width: 60%;
		max-width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, max-content));
		grid-gap: 0.5rem;
		justify-content: center;
		place-items: center;
		${makeUnSelectableTextDiv};
`;
const _productCenteredFlex = css`
		& > div {
			height: 2.5rem;
			${makeRowFlexStart};

			& > span {
				width: max-content;
				margin-right: 0.5rem;
				font-family: nunitoLight;
				font-weight: bolder;
			}

			& > ul {
				width: max-content;
				${makeRowFlexStart};
				align-items: center;

				li {
					width: max-content;
					font-family: nunitoLight;
					margin: 0 0.5rem;
				}
			}
		}
`;
const _makeInlineList = css`
		${makeRowFlexCenter};
		display: inline-flex !important;
		margin: 0 0.5rem;
		transform: scale(0.8);
`;
export const ProductDetailsContainerStyled = styled.section`
	${makeFullWidthBlock};
	${makeColFlexStart};
	height: max-content;
	min-height: 100vh;

	.product-top-wrapper {
		${makeFullWidthBlock};
		${makeColFlexCenter};

		@media screen and (min-width: 641px) {
			${makeRowFlexCenter};
			padding-bottom: 10%;
		}

		background-color: ${({ theme }) => theme.$lessBrightColor};
		position: relative;
		height: 55rem;
		padding-bottom: 30%;

		.product-wrapper-decorator {
			${makeAbsoluteTopDiv};
			width: 0;
			height: 0;
			border-bottom: 55rem solid ${({ theme }) => theme.$darkAccentColor};
			border-right: 101vw solid transparent;
		}

		.product-previews-div {
			order: 2;
			width: 78%;
			position: inherit;
			${makeRowFlexStart};
			align-items: center;
			overflow: auto !important;
			${removeScrollBar};

			@media screen and (min-width: 641px) {
				padding-top: 10%;
				width: 30%;
				max-width: 8rem;
				${makeColFlexStart};
				order: 0;
				margin-left: auto;
				height: 100%;
			}

			.product-preview-div {
				width: 25%;
				height: 10rem;
				margin: 0 0.5rem;
				min-width: 8rem;
				border-radius: 0.2rem;
				cursor: pointer;

				&.active {
					transform: scale(0.9);
				}

				@media screen and (min-width: 641px) {
					${makeFullWidthBlock};
					margin: 1rem 0;
					min-height: 10rem !important;
				}

				img {
					height: 100%;
					${makeFullSizeBlock};
					object-fit: cover;
					aspect-ratio: 1 / 1;
					box-shadow: inset 0.2rem 0.3rem 0.5rem ${({ theme }) => theme.$homeOutlineColor};
				}
			}
		}

		.product-view-div {
			${makeFullWidthBlock};

			@media screen and (min-width: 641px) {
				width: 70%;
			}

			position: inherit;
			height: 70%;
			margin: auto;
			${makeColFlexEnd};
			align-items: center;

			img {
				filter: drop-shadow(0.2rem 0.2rem 0.5rem $darkAccentColor);
				height: 80%;
			}
		}
	}

	.product-bottom-wrapper {
		overflow: visible;
		${makeFullWidthBlock};
		${makeColFlexStart};
		align-items: center;
		height: max-content;
		min-height: 70vh;
		background-color: ${({ theme }) => theme.$darkAccentColor};
		z-index: 3;
		color: ${({ theme }) => theme.$singleProductMainTextColor};
		padding-bottom: 15%;

		span {
			${makeColFlexCenter};
			align-items: center;
		}

		.product-visual-description-wrapper {
			overflow: visible;
			${makeColFlexStart};
			${makeFullWidthBlock};
			height: max-content;
			align-items: center;
			padding-bottom: 8rem;

			.product-name {
				${makeFullWidthBlock};
				text-align: center;
				height: max-content;
				min-height: 1.5rem;
				padding: 0.2rem;
				font-size: 1.5rem;
				font-family: manjariLight;
				margin-top: -3rem;
				margin-bottom: 3rem;
				color: ${({ theme }) => theme.$singleProductMainTextColor};
				font-weight: lighter !important;
			}

			.products-ratings-div {
				${makeFullWidthBlock};
				${makeRowFlexCenter};
				margin-bottom: 1.5rem;
				& > * {
					margin: unset !important;
				}
				.rating-div {
					${_makeCenteredDivSize};
					width: max-content;
					height: 2rem;
					${makeRowFlexStart};
					display: inline-flex !important;
				}
				span {
					font-size: 1.2rem;
					font-family: nunitoLight;
					color: ${({ theme }) => theme.$singleProductMainTextColor};
					display: inline-flex !important;
					margin-right: 1rem !important;
				}
			}

			.product-price-div {
				${_makeCenteredDivSize};
				justify-content: space-evenly;

				* {
					font-family: openSansLight;
				}

				.product-price {
					width: max-content;
				}

				.cancelled-price {
					width: max-content;
					text-align: center;
					color: ${({ theme }) => theme.$redTextColor};
					min-width: 50%;
				}
			}

			.product-brief-details {
				height: max-content;
				${_makeCenteredDivSize};
				width: 25rem;
				text-align: center;
				font-size: 0.8rem;
				font-family: latoMedium;
				margin: 0.5rem auto;
			}

			.product-visual-details-divs {
				${_makeProductCenteredGrid};
				${_productCenteredFlex};

				li {
					&.product-size-list {
						${_makeInlineList};
						width: max-content;
						min-width: 3rem;
						height: 2rem;
						color: ${({ theme }) => theme.$shopSizeChipColor};
						border: 0.1rem solid ${({ theme }) => theme.$shopSizeChipColor};
						transition: all 0.3s ease-in-out;
					}

					&.product-color-list {
						${_makeInlineList};
						width: 2rem;
						height: 2rem;
						border-radius: 50%;

						&:first-of-type {
							background-color: ${({ theme }) => theme.$accentColor};
							border: 0.1rem solid ${({ theme }) => theme.$homeOutlineColor};
							justify-self: flex-start;
						}

						&:last-of-type {
							background-color: ${({ theme }) => theme.$darkAccentColor};
							border: 0.1rem solid ${({ theme }) => theme.$homeOutlineColor};
						}
					}
				}
			}

			.product-text-details-divs {
				${_productCenteredFlex};
				${_makeProductCenteredGrid};
			}

			.product-cta-buttons {
				height: 5rem;
				${makeRowFlexCenter};
				align-items: flex-start;

				.product-cta-button {
					height: 2.5rem;
					min-width: 8rem;
					width: max-content;
					margin: 0 1rem;
					padding: 0.5rem 1rem;
					outline: none;
					cursor: pointer;
					border: 0.1rem solid ${({ theme }) => theme.$brightColor};
					transition: transform 0.3s ease-in-out;

					&:hover {
						transform: scale(0.95);
					}

					&.secondary {
						background-color: transparent;
						border-radius: 0.2rem;
						color: ${({ theme }) => theme.$lessBrightColor};
					}

					&.primary {
						color: ${({ theme }) => theme.$darkAccentColor};
						background-color: ${({ theme }) => theme.$lessBrightColor};
					}
				}
			}
		}

		.product-text-description-wrapper {
			${makeFullWidthBlock};
			padding: 0 10vw;
			height: max-content;
			color: ${({ theme }) => theme.$singleProductMainTextColor};
			font-family: manjariLight;

			.PTD-title {
				width: max-content;
				margin: 0 auto;
				text-align: center;
				margin-bottom: 2rem;
				font-family: manjariLight;
				position: relative;
				overflow: visible;
				height: max-content;
				padding: 0.5rem 0;

				&::after {
					${makeAbsoluteBottomRightDiv};
					bottom: -10%;
					width: 60%;
					height: 0.2rem;
					background-color: ${({ theme }) => theme.$accentColor};
					border-radius: 0.1rem;
				}
			}

			.PTD-text {
				text-align: justify;
				font-size: 0.8rem;
			}
		}
	}
`;

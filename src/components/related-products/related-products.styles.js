import styled from "styled-components";
import { makeFullHeightBlock, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart, makeUnSelectableTextDiv } from "../../styles/styles";



export const RelatedProductsStyled = styled.section`
	${makeUnSelectableTextDiv};
	${makeFullWidthBlock};
	height: 30rem;
	background-color: ${({ theme }) => theme.$brightColor};
	color: ${({ theme }) => theme.$darkAccentColor};
	padding: 3rem;
	position: relative;

	.related-products-title {
		&,
		* {
			font-family: nunito;
			font-size: 1.8rem;
		}

		${makeFullWidthBlock};
		${makeRowFlexCenter};
		height: max-content;
		margin-bottom: 2rem;

		span {
			margin-left: 0.5rem;
			background-color: ${({ theme }) => theme.$darkAccentColor};
			color: ${({ theme }) => theme.$lessBrightColor};
			padding: 0 1rem;
			transform: translateX(-0.5rem);
			cursor: pointer;
		}
	}

	.related-products-wrapper {
		${makeFullWidthBlock};
		${makeRowFlexStart};
		justify-content: flex-start;
		position: relative;
		.shop-product-div {
			min-width: 15rem;
			width: 12rem;
			height: 15rem;
			margin: 2.5rem 2vw;
			overflow: hidden;
			&:first-of-type {
				margin-left: 0;
			}
		}
	}
	.RPW-carousel-control {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.$lessBrightColor};
		box-shadow: 0.3rem 0.3rem 1.5rem ${({ theme }) => theme.$lightestShadowColor};
		position: absolute;
		top: 15rem;
		z-index: 3;
		transition: transform 0.2s ease-in;
		cursor: pointer;
		svg {
			${makeFullHeightBlock};
			transform: scale(0.6);
			path {
				fill: ${({ theme }) => theme.$darkAccentColor};
			}
		}
		&.left {
			left: 1.5rem;
			@media screen and (min-width: 641px) {
				left: 3rem;
			}
			&:hover {
				transform: scale(0.8);
			}
		}
		&.right {
			right: 1.5rem;
			@media screen and (min-width: 641px) {
				right: 3rem;
			}
			transform: scaleX(-1);
			&:hover {
				transform: scale(-0.8, 0.8);
			}
		}
	}
`;
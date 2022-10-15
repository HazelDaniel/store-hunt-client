import styled, { css } from "styled-components";
import { makeAbsoluteTopDiv, makeColFlexCenter, makeFullWidthBlock, makeRowFlexCenter } from "../../styles/styles";

const _makeButtonSize = css`
	width: 2.8rem;
	height: 1.8rem;
`;

export const ShopProductsDisplayStyled = styled.div`
	${makeFullWidthBlock};
	height: max-content;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	grid-auto-flow: row;
	grid-auto-rows: 17rem;
	padding: 1rem;
	position: relative;


	.shop-pagination-buttons-div {
		${makeAbsoluteTopDiv};
		${makeFullWidthBlock};
		${makeRowFlexCenter};
		top: 110%;

		.shop-pagination-buttons {
			width: max-content;

			& > * {
				${makeColFlexCenter};
				align-items: center;
				display: inline-flex;

				

				&.SP-button {
					${_makeButtonSize};
					border-radius: 0.5rem;
					margin: 0 0.3rem;
					border: 0.1rem solid ${({theme})=>theme.$darkAccentColor};
					background-color: unset;
					box-shadow: inset 0.2rem 0.2rem 0.2rem ${({theme})=>theme.$lightestShadowColor};
					color: ${({theme})=>theme.$redTextColor};
					cursor: pointer;
					// @include debug;
				}

				&.spb-active {
					background-color: ${({theme})=>theme.$darkAccentColor};
					box-shadow: 0.2rem 0.2rem 0.2rem ${({theme})=>theme.$lightestShadowColor};
				}

				&.SP-more-button {
					${_makeButtonSize};
					${makeRowFlexCenter};
					align-items: center;
					margin: 0 0.5rem;
					display: inline-flex;
					align-self: center;

					span {
						width: 1rem;
						height: 1rem;
						border-radius: 50%;
						background-color: ${({theme})=>theme.$darkAccentColor};
						transform: scale(0.6) translateY(25%);
					}
				}
			}
		}
	}
`;
import styled, { css } from "styled-components";
import {
	makeAbsoluteBottomDiv,
	makeAbsoluteTopLefDiv,
	makeAbsoluteTopRightDiv,
	makeColFlexCenter,
	makeColFlexStart,
	makeFullHeightBlock,
	makeFullSizeBlock,
	makeFullWidthBlock,
	makeRowFlexCenter,
	makeRowFlexStart,
	removeScrollBar,
} from "../../styles/styles";

const _makeVisualList = css`
	${makeRowFlexStart};
	flex-wrap: row;
	flex-basis: 2rem;
`;

const _computeTogglerPosition = ({ $closed =false }) => {
	if ($closed) {
		return css`
			position: fixed;
			left: 0% !important;
			z-index: 9;
			top: 45vh !important;
			svg {
				transform: scale(-1, 0.8);
			}
			@media screen and (min-width: 804px) and (max-width: 830) {
				svg {
					transform: scale(-1, 0.8);
				}
			}
			@media screen and (min-width: 830px) and (max-width: 1094) {
				right: 0;
				transform: translateX(-25%);

				svg {
					transform: scale(-1, 0.8);
				}
			}

		`;
	}
	else {
		return css`
			${makeAbsoluteTopRightDiv};
			top: 35%;
			right: -10%;
			@media screen and (min-width: 815px) and (max-width: 899px) {
				right: -9% !important;
			}
			@media screen and (min-width: 900px) {
				right: -8% !important;
			}
		`;
	}
}

const _styleSidePaneOnClose = ({ $closed }) => {
	if (!$closed) return;
	return css`
		left: -100vw;
		box-shadow: unset;
	`;
};

export const ShopSidePaneStyled = styled.div`
	${makeAbsoluteTopLefDiv};
	${makeFullHeightBlock};
	${makeColFlexCenter};
	align-items: center;
	z-index: 4;
	background-color: ${({ theme }) => theme.$lessBrightColor};
	width: 40%;
	max-width: 25rem !important;
	min-width: 20rem;
	padding: 1.5rem 1rem 1rem 0;
	box-shadow: 0.75rem 0 0.8rem ${({ theme }) => theme.$homeOutlineColor};
	overflow: visible !important;
	transition: all 0.3s ease-in-out;
	* {
		overflow: visible;
	}

	${_styleSidePaneOnClose};

	@media screen and (min-width: 1095px) {
		left: 0 !important;
		top: -2rem !important;
		height: calc(100% + 2rem) !important;
		box-shadow: unset !important;
	}
`;

export const ShopSidePaneContainerStyled = styled.div`
	${makeFullSizeBlock};
	${makeColFlexStart};
	align-items: flex-start;
	border: 0.2rem solid ${({ theme }) => theme.$lessBrightColor};
	border-left: none;
	padding: 2rem;
	padding-right: 1rem;
	position: relative;
	overflow: scroll;
	${removeScrollBar};
	overflow-x: visible !important;

	.SSPM-section {
		position: relative;
		${makeFullWidthBlock};
		${makeColFlexStart};
		align-items: flex-start;
		height: fit-content;
		margin-bottom: 2rem;

		ul {
			list-style-type: none;
			${makeFullWidthBlock};
			${makeColFlexStart};
			align-items: flex-start;
			position: relative;
			padding-bottom: 1rem;
			margin-top: 1rem;

			li {
				cursor: pointer;
			}

			&::after {
				${makeAbsoluteBottomDiv};
				background-color: ${({ theme }) => theme.$homeOutlineColor};
				transform: translateX(50%);
				width: 80%;
				height: 0.1rem;
				right: 50%;
			}
		}

		&.first {
			margin-top: 3rem;
		}

		&:last-of-type {
			ul {
				&::after {
					display: none;
				}
			}
		}

		.SSPM-accordion {
			height: 2.5rem;
			${makeFullWidthBlock};
			${makeRowFlexStart};
			justify-content: space-between;
			overflow: hidden;

			.SSPM-section-title {
				color: ${({ theme }) => theme.$shopSideTabTitleColor};
				font-family: openSansMedium;
				font-weight: 600;
			}

			.SSPM-section-toggle {
				${makeFullHeightBlock};
				${makeColFlexCenter};

				svg {
					height: 80%;
					margin: auto 0;
					transform: scale(0.6) rotateZ(90deg);
					cursor: pointer;

					path {
						fill: ${({ theme }) => theme.$shopSideTabTitleColor};
					}
				}
			}
		}

		.SSPM-section-list {
			li {
				margin: 0.5rem 0;
				font-size: 0.8rem;
				${makeFullWidthBlock};
			}

			&.size-list {
				${_makeVisualList};

				li {
					width: max-content;
					min-width: 3rem;
					height: 2rem;
					${makeRowFlexCenter};
					display: inline-flex !important;
					margin: 0 0.5rem;
					border: 0.1rem solid ${({ theme }) => theme.$shopSizeChipColor};
					color: ${({ theme }) => theme.$shopSizeChipColor};
					transition: all 0.3s ease-in-out;

					&:first-of-type {
						margin-right: 0;
					}

					&:hover {
						background-color: ${({ theme }) => theme.$darkAccentColor};
						color: ${({ theme }) => theme.$lessBrightColor};
					}

					&.active {
						background-color: ${({ theme }) => theme.$darkAccentColor};
						color: ${({ theme }) => theme.$lessBrightColor};
						border: none;
					}
				}
			}

			&.colors-list {
				${_makeVisualList};

				li {
					margin: 0 1rem;
					width: 2rem;
					height: 2rem;
					border-radius: 50%;
					border: 0.1rem solid ${({ theme }) => theme.$homeOutlineColor};

					&#C-2BCBD6 {
						background-color: #2bcbd6;
					}

					&#C-4878FC {
						background-color: #4878fc;
					}

					&#C-CD1613 {
						background-color: #cd1613;
					}

					&#C-000000 {
						background-color: #000000;
					}
				}
			}

			&.tags-list {
				all: unset;
				${makeFullWidthBlock};
				overflow: hidden;
				height: max-content;
				flex: row wrap;

				li {
					width: 40%;
					min-width: 5rem;
					height: 1.5rem;
					margin: 0.5rem;
					${makeColFlexCenter};
					display: inline-flex;
					background-color: ${({ theme }) => theme.$accentColorTrans};
					color: ${({ theme }) => theme.$lessBrightColor};
					border-radius: 0.3rem;
				}
			}
		}
	}
`;

export const ShopSearchBoxStyled = styled.div`
	${makeFullWidthBlock};
	${makeColFlexStart};
	align-items: center;
	max-height: 3rem !important;
	overflow: hidden;
	position: relative;
	justify-content: space-between;
	padding: 0.5rem;
	padding-right: 1rem;
	overflow: visible !important;
	background-color: ${({ theme }) => theme.$lessBrightColor};
	box-shadow: 0.1rem 0.2rem 0.3rem ${({ theme }) => theme.$homeOutlineColor};

	span {
		${makeAbsoluteTopRightDiv};
		height: 2rem;
		overflow: visible !important;
		top: 25%;
		right: 3%;
		margin-right: 0.3rem;

		svg {
			height: 1.2rem;
			transform: scaleX(-1);

			path {
				fill: ${({ theme }) => theme.$accentColor};
			}
		}
	}

	input {
		padding: 0 1rem;
		width: 75%;
		all: unset;
		caret-color: ${({ theme }) => theme.$homeGoldLikeColor};
		overflow: hidden;

		&::placeholder {
			transform: scale(0.8);
			font-size: 0.7;
			height: max-content;
			text-align: start;
			color: ${({ theme }) => theme.$homeOutlineColor};
		}

		&::-webkit-search-cancel-button {
			-webkit-appearance: none;
		}
	}
`;

export const ShopSideTabTogglerStyled = styled.div`
	width: 2rem;
	height: 8rem;
	${makeColFlexCenter};
	border-top-right-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	box-shadow: 0.1rem 0.2rem 0.8rem ${({ theme }) => theme.$homeOutlineColor};
	background-color: ${({ theme }) => theme.$brightColor};
	svg {
		transform: scaleY(0.8);

		path {
			fill: ${({ theme }) => theme.$darkAccentColor};
		}
	}
	${_computeTogglerPosition};
	@media screen and (min-width: 1095px) {
		display: none !important;
	}
`;

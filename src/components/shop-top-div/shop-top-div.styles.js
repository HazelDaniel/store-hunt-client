import styled from "styled-components";
import { makeFullWidthBlock, makeRowFlexStart } from "../../styles/styles";


export const ShopTopDivStyled = styled.div`
	${makeFullWidthBlock};
	background-color: ${({ theme }) => theme.$brightColor};
	color: ${({ theme }) => theme.$darkAccentColor};
	padding: 0 1rem;
	${makeRowFlexStart};
	justify-content: space-between;
	align-items: flex-end;
	height: max-content;
	padding-bottom: 0.5rem;

	* {
		font-family: latoMedium !important;
	}

	.shop-results-count-text {
		margin-left: 1rem;
		width: max-content;
		min-width: 40%;
		text-align: start;
	}

	@media screen and (min-width: 1095px) {
		margin-left: auto;
		width: calc(100% - 25rem) !important;

		.shop-results-count-text {
			min-width: max-content !important;
		}
	}
`;
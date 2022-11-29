
import styled from "styled-components";
import { makeColFlexStart, makeFullSizeBlock, makeFullWidthBlock } from "../../styles/styles";

export const PlaceholderStyled = styled.div`

	height: 16rem;
	width: 12rem;
	${makeColFlexStart};

`;

export const PlaceholderSectionStyled = styled.div`
	${makeFullWidthBlock};
	height: 15%;
	background-color: ${({ theme }) => theme.$accentColorTrans};
	margin: 10% 0;
`;
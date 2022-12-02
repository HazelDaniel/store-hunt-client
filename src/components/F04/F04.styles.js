
import styled from "styled-components";
import {  makeColFlexCenter, makeFullSizeBlock, removeScrollBar } from "../../styles/styles";

export const F04Styled = styled.div`
	height: 100vh;
	width: 100vw;
	position: relative;
	${makeColFlexCenter};
	${removeScrollBar};
	padding: 3rem;
	position: fixed;
	z-index: 5;
	
`;

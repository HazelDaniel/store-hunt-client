import styled from "styled-components";
import { makeRowFlexEnd } from "../../styles/styles";

export const RatingDivStyled = styled.div`
	margin-right: 0.5rem;
	width: 30%;
	${makeRowFlexEnd};
	height: 1rem;

	svg {
		height: 80%;

		& > path {
			// a toggle between these two fills to none will give us the rating effect we need
			&:first-of-type {
				fill: ${({theme})=>theme.$accentColor};
			}

			&:last-of-type {
				fill: ${({theme})=>theme.$accentColor};
			}
		}

		&:nth-of-type(n + 3) {
			& > path {
				// a toggle between these two fills to none will give us the rating effect we need
				&:first-of-type {
					fill: none;
				}

				&:last-of-type {
					fill: ${({theme})=>theme.$accentColor};
				}
			}
		}
	}
`;

import { useRef } from "react";
import { CustomSelectStyled } from "./custom-select.styles";
import { convertToCustomSelect } from "./custom-select.utils";



export const CustomSelect = () => {
	const selectRef = useRef(null);
	return (
		<CustomSelectStyled ref={selectRef}>
			{convertToCustomSelect(selectRef.current)}
			<select>
				<option value="high to low">High To Low</option>
				<option value="high to low">High To Low</option>
				<option value="low to high">Low To High</option>
			</select>
		</CustomSelectStyled>
	);
}
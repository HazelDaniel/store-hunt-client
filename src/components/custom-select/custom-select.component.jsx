import { useEffect } from "react";
import { useRef } from "react";
import { CustomSelectStyled } from "./custom-select.styles";
import { convertToCustomSelect } from "./custom-select.utils";



export const CustomSelect = () => {
	useEffect(() => {
		convertToCustomSelect();
	}, []);
	return (
		<CustomSelectStyled className="custom-select" key={"11d1"}>
			<select>
				<option value="placeholder">None (default)</option>
				<option
					value="none"
					onClick={() => {
					}}
				>
					None
				</option>
				<option value="high to low">High To Low</option>
				<option value="low to high">Low To High</option>
			</select>
		</CustomSelectStyled>
	);
}
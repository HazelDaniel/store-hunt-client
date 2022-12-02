import { LoaderOverlayStyled, LoaderTextStyled, LoaderUnderlineStyled } from "./loader.styles";


export const Loader = () => {
	console.log("loader rendering");
	return (
		<LoaderOverlayStyled>
			<LoaderTextStyled>
				STORE <span>HUNT</span>
				<LoaderUnderlineStyled />
			</LoaderTextStyled>
		</LoaderOverlayStyled>
	);
};

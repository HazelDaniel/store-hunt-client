import { Wrapper } from "../../layout-components/wrapper/wrapper.component";
import { DealOfTheWeek } from "../deal-of-the-week-div/deal-of-the-week-div.component";
import { Directory } from "../directory/directory.component";
import { PageLineBreak } from "../page-line-break/page-line-break.component";
import { Slider } from "../slider/slider.component";

export const Home = () => {
	return (
		<Wrapper>
			<Slider />
			<Directory />
			<PageLineBreak />
			<DealOfTheWeek />
		</Wrapper>
	);
};
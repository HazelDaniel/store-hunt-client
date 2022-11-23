import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Wrapper } from "../../layout-components/wrapper/wrapper.component";
import { CustomInput } from "../custom-input/custom-input.component";
import { ContactStyled } from "./contact.styles";
import { Status, Wrapper as GoogleWrapper } from "@googlemaps/react-wrapper";
const render = (status = Status) => {
	return <h1>{status}</h1>;
};

export const Contact = () => {
	const ref = useRef(null);
	("");
	const [map, setMap] = useState(null);
	console.log(map);

	useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, {}));
		}
	}, [ref, map]);
	return (
		<GoogleWrapper>
			<Wrapper>
				<ContactStyled>
					{map ? (
						<section
							ref={ref}
							className="contact-map-area"
						></section>
					) : (
						<section
							className="contact-map-area"
							style={{
								backgroundImage: ` url(IMAGES/GoogleMapTA.webp)`,
							}}
						></section>
					)}
					<section className="contact-details-area">
						<p className="contact-heading">contact us</p>
						<p className="contact-text">As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
						<p className="contact-sub-heading">Nigeria</p>
						<p className="contact-text">195 E Parker Square Dr, Parker, CO 801 +234 982-XXX-0958</p>
						<form className="contact-form">
							<div className="inline-input-div">
								<CustomInput type={"text"} label={`name`} id={`name`} placeholder={`john doe`} $variant={`S`} />
								<CustomInput type={"email"} label={`email`} id={`email`} placeholder={`example@example.com`} $variant={`S`} />
							</div>
							<label for="textarea">Message</label>
							<textarea name="" id="email" maxlength="300" style={{ resize: "none" }} placeholder="Type your notes here"></textarea>
							<input type="submit" value="SEND MESSAGE" />
						</form>
					</section>
				</ContactStyled>
			</Wrapper>
		</GoogleWrapper>
	);
};
export default Contact;

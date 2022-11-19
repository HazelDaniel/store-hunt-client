import { useState } from "react";
import { Navigate } from "react-router-dom";


export const F04 = () => {
	const [redirect, setRedirect] = useState(false);
	return <div> Error 404. page not found!
		<br />
		<button onClick={() => setRedirect(true)}>GO TO HOME</button>
		{redirect && <Navigate to="/" replace={true} /> }
	</div>;
};
export default F04;
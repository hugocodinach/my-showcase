// Imports
import { useLottie } from "lottie-react";

// Assets
import * as animationData from '../../../public/lotties/404Lottie.json';

function Lottie404() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData
	};

	const { View } = useLottie(defaultOptions, { width: '80%' });

	return View;
}

export default Lottie404;
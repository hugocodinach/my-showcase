// Imports
import { useLottie } from "lottie-react";

// Assets
import * as animationData from '../../../public/lotties/computerLottie.json';

function ComputerLottie() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData
	};

	const { View } = useLottie(defaultOptions, { width: '60rem' });

	return View;
}

export default ComputerLottie;
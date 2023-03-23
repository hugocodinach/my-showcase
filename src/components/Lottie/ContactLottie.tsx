// Imports
import { useLottie } from "lottie-react";

// Assets
import * as animationData from '../../../public/lotties/contactLottie.json';

function ContactLottie() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData
	};

	const { View } = useLottie(defaultOptions, { width: '50rem' });

	return View;
}

export default ContactLottie;
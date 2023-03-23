import { useRef } from 'react';

import Button from '@/components/Button/Button';
import ComputerLottie from '@/components/Lottie/ComputerLottie';
import Text from '@/components/Text/Text';
import styles from '@/styles/home.module.scss';
import theme from '@/styles/Theme/theme';
import Link from 'next/link';

export default function Home() {
	const { spacing } = theme;

	const presRef = useRef<null | HTMLDivElement>(null);

	const scrollToRef = () => {
		if (!presRef?.current)
			return;

		presRef.current.scrollIntoView();
	};

	return (
		<div className={styles.container}>
			<div className={styles.introContainer}>
				<div className={styles.introLeftContainer}>
					<Text variant='title'>Bienvenue <Text variant='title' color='blue'>!</Text></Text>
					<Text>Créatif depuis mon enfance, cela fait maintenant trois ans que je me dédis à la création d'applications mobiles et web et que je vis de ma passion.</Text>
					<Button onClick={scrollToRef} style={{ marginTop: spacing.s }} text='Me découvrir' />
				</div>
				<div className={styles.introRightContainer}>
					<ComputerLottie />
				</div>
			</div>
			<div className={styles.presContainer} ref={presRef}>
				<div className={styles.presLeftContainer}>
					<Text variant='title'>Qui suis-je <Text variant='title' color='blue'>?</Text></Text>
					<br/>
					<Text>Je m'appelle <Text variant='bodyAccent' color='purple'>Hugo</Text> Codinach, j'ai <Text variant='bodyAccent' color='purple'>23 ans</Text> et je viens de finir mon <Text variant='bodyAccent' color='purple'>master 2</Text> à EPITECH Montpellier.</Text>
					<br/>
					<Text>Tout au long de mes études, j'ai pu acquérir un peu plus de <Text variant='bodyAccent' color='purple'>3 ans d'expérience</Text> en entreprise en tant que <Text variant='bodyAccent' color='purple'>développeur full stack</Text>.</Text>
					<br/>
					<Text>Je parle couramment <Text variant='bodyAccent' color='purple'>anglais</Text> et habite à port marianne sur <Text variant='bodyAccent' color='purple'>Montpellier</Text>.</Text>
					<Link href="/projects">
						<Button style={{ marginTop: spacing.s }} text='Projets réalisés' />
					</Link>
				</div>
				<div className={styles.presRightContainer}>
					<img className={styles.image} alt='me' src='/profile.jpg' />
				</div>
			</div>
		</div>
	);
}

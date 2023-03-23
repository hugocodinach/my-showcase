import Button from '@/components/Button/Button';
import ComputerLottie from '@/components/Lottie/ComputerLottie';
import Text from '@/components/Text/Text';
import styles from '@/styles/home.module.scss';
import theme from '@/styles/Theme/theme';

export default function Home() {
	const { spacing } = theme;

	return (
		<div className={styles.container}>
			<div className={styles.introContainer}>
				<div className={styles.leftContainer}>
					<Text variant='title'>Bienvenue <Text variant='title' color='blue'>!</Text></Text>
					<Text>Créatif depuis mon enfance, cela fait maintenant trois ans que je me dédis à la création d'applications mobiles et web et que je vis de ma passion.</Text>
					<Button style={{ marginTop: spacing.s }} text='Me découvrir' />
				</div>
				<div className={styles.rightContainer}>
					<ComputerLottie />
				</div>
			</div>
		</div>
	);
}

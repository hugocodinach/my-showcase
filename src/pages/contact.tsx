import ContactLottie from '@/components/Lottie/ContactLottie';
import Text from '@/components/Text/Text';
import styles from '@/styles/contact.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
            <div className={styles.leftContainer}>
                <Text variant='title'>Mes contacts <Text variant='title' color='blue'>!</Text></Text>
                <Text>Pour me contacter, vous pouvez m'appeler au <Text variant='bodyAccent' color='purple'>0622525323</Text> ou m'envoyer un mail à <Text variant='bodyAccent' color='purple'>hugo.codinach.pro@gmail.com</Text></Text>
            </div>
            <div className={styles.rightContainer}>
                <ContactLottie />
            </div>
		</div>
	);
}

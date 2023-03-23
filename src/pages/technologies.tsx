import Technology from '@/components/Technology/Technology';
import Text from '@/components/Text/Text';
import { primaryTechnologies, secondaryTechnologies } from '@/data/technologies';
import styles from '@/styles/technologies.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
            <Text variant='title'>Technologies habituelles</Text>
            <div className={styles.technologiesContainer}>
                {primaryTechnologies.map((technology, key) => <Technology technology={technology} key={key} />)}
            </div>
            <Text variant='title'>Technologies où je débute</Text>
            <div className={styles.technologiesContainer}>
                {secondaryTechnologies.map((technology, key) => <Technology technology={technology} key={key} />)}
            </div>
		</div>
	);
}

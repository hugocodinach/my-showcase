
import ITab from '@/utils/navigation/ITab';
import tabs from '@/utils/navigation/tabs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Text from '../Text/Text';
import styles from './NavBar.module.scss';

export default function NavBar() {
    const router = useRouter();

    const renderTab = (tab: ITab) => {
        return (
            <Link href={tab.path}>
                <div key={tab.path}>
                    <Text color={router.pathname === tab.path ? 'blue' : 'text'} variant='bodyAccent'>{tab.title}</Text>
                </div>
            </Link>
        );
    }

	return (
		<div className={styles.container}>
            <div className={styles.tabsContainer}>
                {tabs.map(renderTab)}
            </div>
		</div>
	);
}

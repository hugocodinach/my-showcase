import theme from '@/styles/Theme/theme';
import styles from './Paginator.module.scss';

type PaginatorButtonProps = {
    isActive: boolean;
}

type PaginatorProps = {
    items: Array<any>;
    activeIndex: number;
    onClick: (index: number) => void;
};

const Paginator = ({
    items,
    activeIndex,
    onClick
}: PaginatorProps) => {
	const { colors } = theme;

    return (
        <div className={styles.paginatorContainer}>
            {items.map((_, key) => (
                <div className={styles.paginatorButton} onClick={() => onClick(key)} style={{ backgroundColor: activeIndex === key ? colors.blue : 'transparent', borderColor: colors.blue }} key={key} />
            ))}
        </div>
    );
};

export default Paginator;
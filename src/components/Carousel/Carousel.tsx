import { useCallback, useState } from 'react';

import Paginator from './Paginator';
import Text from '../Text/Text';
import styles from './Carousel.module.scss';

type CarouselProps = {
    items: Array<any>;
    renderItem: (item: any) => JSX.Element;
};

const Carousel = ({
    items,
    renderItem
}: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevious = useCallback(() => {
        if (!items?.length)
            return;

        if (activeIndex === 0) {
            setActiveIndex(items?.length - 1);
            return;
        }

        setActiveIndex(activeIndex - 1);
    }, [activeIndex, items?.length]);

    const handleNext = useCallback(() => {
        if (!items?.length)
            return;

        if (activeIndex === items?.length - 1) {
            setActiveIndex(0);
            return;
        }

        setActiveIndex(activeIndex + 1);
    }, [activeIndex, items?.length]);

    const handleClick = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    return (
        <>
            <div className={styles.carouselContainer}>
                <div className={styles.innerContainer} style={{ transform: `translate(-${activeIndex * 100}%)`}}>
                    {items.map((item, key) => {
                        return (
                            <div className={styles.itemContainer} key={key}>
                                {renderItem(item)}
                            </div>
                        );
                    })}
                </div>
                <div className={styles.buttonsContainer}>
                    <div className={styles.chevronContainer} onClick={handlePrevious}>
                        <Text color='blue' variant='title'>{'<'}</Text>
                    </div>
                    <div className={styles.chevronContainer} onClick={handleNext}>
                        <Text color='blue' variant='title'>{'>'}</Text>
                    </div>
                </div>
            </div>
            <Paginator items={items} activeIndex={activeIndex} onClick={handleClick} />
        </>
    );
};

export default Carousel;
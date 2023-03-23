import { useMemo } from 'react';

import ITechnology from '../CompanyProject/Interfaces/ITechnology';
import Text from '../Text/Text';

import styles from './Technology.module.scss';

type TechnologyProps = {
    technology: ITechnology;
};

const Technology = ({
    technology
}: TechnologyProps) => {
    const technologyTitleStyle = useMemo(() => ({ marginTop: 10 }), []);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.logo} src={technology.logo} alt='technology logo' />
            </div>
            <Text style={technologyTitleStyle}>{technology.name}</Text>
        </div>
    );
};

export default Technology;
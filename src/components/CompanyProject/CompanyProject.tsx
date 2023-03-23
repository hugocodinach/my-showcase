import ICompanyProject from './Interfaces/ICompanyProject';

import styles from './CompanyProject.module.scss';
import Text from '../Text/Text';
import Technology from '../Technology/Technology';

type CompanyProjectProps = {
    project: ICompanyProject;
};

const CompanyProject = ({
    project
}: CompanyProjectProps) => {
    const { name, company, logo, description, technologies } = project;

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.imageContainer}>
                    {logo && <img alt='logo' src={logo} className={styles.image} />}
                </div>
                <Text variant='title'>{name}</Text>
                <Text>Entreprise: <Text color='blue' variant='bodyAccent'>{company}</Text></Text>
                <br />
                {description.split('\n').map((str, key) => <Text key={key}>{str}</Text>)}
            </div>
            <div className={styles.rightContainer}>
                {technologies.map((technology, key) => (
                    <Technology technology={technology} key={key} />
                ))}
            </div>
        </div>
    );
};

export default CompanyProject;
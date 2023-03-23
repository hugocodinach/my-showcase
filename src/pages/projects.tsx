import CompanyProject from '@/components/CompanyProject/CompanyProject';
import companyProjects from '@/components/CompanyProject/data/companyProjects';
import styles from '@/styles/projects.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
            {
                companyProjects.map((project, key) => (
                    <div key={key} className={styles.projectContainer}>
                        <CompanyProject project={project} />
                    </div>
                ))
            }
		</div>
	);
}

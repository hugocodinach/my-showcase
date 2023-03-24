import Carousel from '@/components/Carousel/Carousel';
import Text from '@/components/Text/Text';
import IMovie from '@/data/interfaces/IMovie';
import movies from '@/data/movies';
import musics from '@/data/musics';
import styles from '@/styles/hobbies.module.scss';
import { useMemo } from 'react';

export default function Home() {
    const draws = useMemo(() => Array.from({length: 10}, (_, i) => `/draws/draw${i + 1}.${i < 3 ? 'PNG' : 'JPG'}`), []);

    const renderMovie = (movie: IMovie) => {
        return (
            <div className={styles.itemContainer}>
                <div className={styles.itemLeftContainer}>
                    <Text variant='subtitle'>{movie.title}</Text>
                    <Text>de <Text color='purple' variant='bodyAccent'>{movie.realisator}</Text></Text>
                    <br />
                    {movie.opinion.split('\n').map((str, key) => <Text key={key}>{str}</Text>)}
                </div>
                <div className={styles.itemRightContainer}>
                    <img src={movie.image} alt='movie image' className={styles.itemImage} />
                </div>
            </div>
        );
    }

    const renderDraw = (drawPath: string) => (
        <div className={styles.itemDrawContainer}>
            <img src={drawPath} alt='draw' className={styles.drawImage} />
        </div>
    )

	return (
		<div className={styles.container}>
            <div className={styles.titleContainer}>
                <Text variant='title'>Le cinéma</Text>
                <Text>Art parfois libéré, parfois prenant, le cinéma occupe nombreuses de mes journées. Voici donc mon top 3 de mes films préférés (Ordre non contractuel).</Text>
            </div>
            <Carousel items={movies} renderItem={renderMovie} />
            <div className={styles.titleContainer}>
                <Text variant='title'>La musique</Text>
                <Text>J'écoute de la musique en permanence. J'aurais pu naître avec des écouteurs intégrés mais j'ai préféré dépenser mon argent dans l'apple store du coin. Voici en quelques albums le style de musique que je peux écouter.</Text>
            </div>
            <div className={styles.rowWrap}>
                {
                    musics.map((music, key) => (
                        <div key={key} className={styles.musicContainer}>
                            <div className={styles.musicImageContainer}>
                                <img className={styles.album} src={music.image} alt='music album' />
                            </div>
                            <Text style={{ marginTop: 10 }}>{music.title}</Text>
                        </div>
                    ))
                }
            </div>
            <div className={styles.titleContainer}>
                <Text variant='title'>Le dessin</Text>
                <Text>Autodidacte assumé, je dessine quand l'envie me vient. Mon niveau est très modeste mais c'est un passe temps que j'affectionne beaucoup. Voici quelques-uns de mes dessins.</Text>
            </div>
            <Carousel items={draws} renderItem={renderDraw} />
            <div className={styles.spacer} />
		</div>
	);
}

import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'contextos/Favoritos';

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem='favorito' />
            <Titulo> <h1>Aqui estão os seus jogos favoritos!!</h1> </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
};
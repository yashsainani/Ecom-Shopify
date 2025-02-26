import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import userCredentialChk from '../../utils/userCredential';
import styles from './Home.module.css';

const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!userCredentialChk()) navigate('/');
    }, []);

    return (
        <section className={styles.home}>
            <h1>Welcome To React</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, libero consequatur? Quae eaque pariatur necessitatibus praesentium, dolor recusandae maxime? Placeat repudiandae ea hic commodi delectus incidunt consectetur, tempore atque quos dignissimos aliquam accusamus sed neque similique facere reprehenderit molestiae architecto nam. Non vero repudiandae quam! Voluptas dolore quis corrupti enim, corporis quasi tempore earum dolores distinctio eius atque, facere mollitia debitis quas placeat deleniti odit delectus assumenda. Sit consequuntur inventore aperiam exercitationem fugiat laudantium esse excepturi libero! Dolorem natus pariatur beatae tenetur porro quod debitis laboriosam, illum laudantium ad labore reprehenderit consequuntur dicta ea culpa. Magnam neque aliquid iusto et.</p>
            <button>Explore More!!</button>
        </section>
    );
};

export default Home;
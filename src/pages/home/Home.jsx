import { works } from '../../consts';
import HomeHeader from '../components/HomeHeader';
import HomeWork from '../components/HomeWork';
import './Home.css';

function Home() {
    return (
        <section data-page="home">
            <HomeHeader title="Works" />
            <section className="flex flex-col gap-12">

                {
                    works.map(({ name, image }) => (
                        <HomeWork key={name} workName={name} image={image} />
                    ))
                }
            </section>

        </section>
    );
}

export default Home;

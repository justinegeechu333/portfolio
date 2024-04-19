import TechIcon from '../../components/TechIcon';
import { works, techStacks } from '../../consts';
import HomeHeader from '../components/HomeHeader';
import HomeWork from '../components/HomeWork';
import './Home.css';

function Home() {
    return (
        <section data-page="home" className="flex flex-col gap-8 max-w-5xl mx-auto">
            <section data-section="work">
                <HomeHeader title="Works" />
                <section className="grid grid-cols-12 gap-12 mx-auto max-w-6xl mt-8">

                    {
                        works.map(({ name, image }) => (
                            <HomeWork key={name} workName={name} image={image} className="col-span-12 md:col-span-6 lg:col-span-4" />
                        ))
                    }
                </section>
            </section>
            <section data-section="tech-stacks">
                <HomeHeader title="Tech Stacks" />
                <div className="mx-auto max-w-6xl p-4 overflow-clip h-32" data-animation="scroll-x">
                    <section className="flex flex-row justify-center items-center gap-4" >
                        {
                            techStacks.map((name) => (
                                <TechIcon key={name} name={name} />
                            ))
                        }
                        {techStacks.map((name) => (
                            <TechIcon key={name} name={name} />
                        ))}
                    </section>
                </div>
            </section>
        </section>
    );
}

export default Home;

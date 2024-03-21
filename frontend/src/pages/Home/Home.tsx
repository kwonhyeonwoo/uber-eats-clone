import React from 'react';
import "./css/index.css";
import Search from '../../components/Search/Search';

type Props = {

}
const Home = ({ }: Props) => {
    return (
        <main className='main-page'>
            <section className='main-section'>
                <div className='main-wrapper'>
                    <div className='search-wrapper'>
                        <Search />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
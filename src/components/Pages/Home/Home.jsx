import React from 'react';
import Nav from '../../navbar/Nav';
import Header from './Header';
import SpeacialFeatures from './SpeacialFeatures';

function Home() {
    return (
        <>
            <Nav />
            <main className="container pt-5">
                <Header />
                <SpeacialFeatures />
            </main>
        </>
    );
}

export default Home;

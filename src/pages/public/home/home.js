import React from 'react';
import './home.css'
import Table from '@/components/table/table';


/**
 * Composant React pour afficher la page d'accueil.
 * @function Home
 * @returns {React.Component} Composant React pour la création de la page Home.
 */
const Home = () => {

    return (
        <main className='main'>
            <section className='Homepage'>
                <Table />
            </section>
        </main>
    );
};

export default Home;
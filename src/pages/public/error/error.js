import React from 'react';
import './error.css'

/**
 * Composant React pour afficher une page d'erreur.
 * @function Error
 * @returns {React.Component} Composant React pour la création de la page d'erreur 404.
 */
const Error = () => {
    return (
        <main className='main'>
            <h2> Oops ! Il s'agit d'une erreur !</h2>
        </main>
    );
};

export default Error;
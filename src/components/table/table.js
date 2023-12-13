import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { employeeSelector } from '@/redux/employeeSelector';

/**
 * Composant React représentant une table pour afficher les données des employés.
 * @function Table
 * @returns {React.Component} Composant React pour la table d'affichage des employés.
 */
const Table = () => {

    /**
     * Sélecteur Redux pour obtenir la liste des employés depuis le store.
     * @type {Object}
     * @property {Array} employeesList - Liste des employés.
     */
    const { employeesList } = useSelector(employeeSelector);

    /**
     * État local pour stocker le texte de l'input recherche.
     * @type {Array}
     */
    const [searchText, setSearchText] = useState('');

    /**
     * Formatages des colonnes de la table.
     * @type {Array}
     * @property {string} field - Champ de données.
     * @property {string} headerName - Nom de l'en-tête.
     * @property {number} width - Largeur de la colonne.
     * @property {boolean} editable - Indique si la colonne est éditable.
     */
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'firstname', headerName: 'First Name', width: 150, editable: true },
        { field: 'lastname', headerName: 'Last Name', width: 150, editable: true },
        { field: 'startdate', headerName: 'Start Date', width: 150, editable: true },
        { field: 'department', headerName: 'Department', width: 150, editable: true },
        { field: 'birth', headerName: 'Date of Birth', width: 150, editable: true },
        { field: 'street', headerName: 'Street', width: 150, editable: true },
        { field: 'city', headerName: 'City', width: 150, editable: true },
        { field: 'state', headerName: 'State', width: 150, editable: true },
        { field: 'zipcode', headerName: 'Zip Code', width: 150, editable: true },
    ];

    /**
     * Fonction pour filtrer les lignes en fonction du texte de recherche.
     * @type {Array}
     */
    const filteredRows = employeesList.filter(e =>
        e.firstname.toLowerCase().includes(searchText.toLowerCase()) ||
        e.lastname.toLowerCase().includes(searchText.toLowerCase()) ||
        e.department.toLowerCase().includes(searchText.toLowerCase()) ||
        e.street.toLowerCase().includes(searchText.toLowerCase()) ||
        e.city.toLowerCase().includes(searchText.toLowerCase()) ||
        e.state.toLowerCase().includes(searchText.toLowerCase()) ||
        e.zipcode.includes(searchText) ||
        e.birth.includes(searchText) ||
        e.startdate.includes(searchText)
    );

    /**
     * Lignes formatées pour la DataGrid (après filtrage).
     * @type {Array}
     * @property {number} id - Id de la ligne.
     * @property {string} firstname - Prénom de l'employé.
     * @property {string} lastname - Nom de l'employé.
     * @property {string} startdate - Date de début de l'employé.
     * @property {string} department - Département de l'employé.
     * @property {string} birth - Date de naissance de l'employé.
     * @property {string} street - Rue de l'employé.
     * @property {string} city - Ville de l'employé.
     * @property {string} state - État de l'employé.
     * @property {string} zipcode - Code postal de l'employé.
     */
    const rows = filteredRows.map((e, index) => ({
        id: index,
        firstname: e.firstname,
        lastname: e.lastname,
        startdate: e.startdate,
        department: e.department,
        birth: e.birth,
        street: e.street,
        city: e.city,
        state: e.state,
        zipcode: e.zipcode
    }));

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <TextField label="Rechercher" variant="outlined" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </Box>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid aria-label="grid" rows={rows} columns={columns} pageSizeOptions={[5, 10, 25, 50, 100]} disableRowSelectionOnClick />
            </Box>
        </div>
    );
};

export default Table;

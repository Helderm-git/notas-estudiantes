import React, { useState, useEffect } from 'react';
import GradeList from '../components/GradeList';
import GradeForm from '../components/GradeForm';
import { getGrades } from '../services/GradeService';
import { Link } from 'react-router-dom';

const GradeView = () => {
    const [selectedGrade, setSelectedGrade] = useState(null);
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        loadGrades();
    }, []);

    const loadGrades = async () => {
        const result = await getGrades();
        setGrades(result.data);
    };

    const handleEdit = (grade) => {
        setSelectedGrade(grade);
    };

    const handleSuccess = () => {
        setSelectedGrade(null);
        loadGrades();
    };

    return (
        <div className="container">
            <h2 className="text-dark ms-3 mt-3 mb-3">Gestión de Calificaciones</h2>
            <GradeForm selectedGrade={selectedGrade} onSuccess={handleSuccess} />
            <GradeList grades={grades} onEdit={handleEdit} onDeleteSuccess={loadGrades} />
            <Link to="/" className="btn btn-primary mt-5 ms-3">
                Regresar
            </Link>
        </div>
    );
};

export default GradeView;

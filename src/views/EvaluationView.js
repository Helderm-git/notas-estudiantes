import React, { useState, useEffect } from 'react';
import EvaluationList from '../components/EvaluationList';
import EvaluationForm from '../components/EvaluationForm';
import { getEvaluations } from '../services/EvaluationService';
import { Link } from 'react-router-dom';

const EvaluationView = () => {
    const [selectedEvaluation, setSelectedEvaluation] = useState(null);
    const [evaluations, setEvaluations] = useState([]);

    useEffect(() => {
        loadEvaluations();
    }, []);

    const loadEvaluations = async () => {
        const result = await getEvaluations();
        setEvaluations(result.data);
    };

    const handleEdit = (evaluation) => {
        setSelectedEvaluation(evaluation);
    };

    const handleSuccess = () => {
        setSelectedEvaluation(null);
        loadEvaluations();
    };

    return (
        <div className="container">
            <h2 className="text-dark ms-3 mt-3 mb-3">Gestión de Evaluaciones</h2>
            <EvaluationForm selectedEvaluation={selectedEvaluation} onSuccess={handleSuccess} />
            <EvaluationList evaluations={evaluations} onEdit={handleEdit} onDeleteSuccess={loadEvaluations} />
            <Link to="/" className="btn btn-primary mt-5 ms-3">
                Regresar
            </Link>
        </div>
    );
};

export default EvaluationView;

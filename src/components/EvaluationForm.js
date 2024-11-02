import React, { useState, useEffect } from 'react';
import { createEvaluation, updateEvaluation } from '../services/EvaluationService';

const EvaluationForm = ({ selectedEvaluation, onSuccess }) => {
    const [type, setType] = useState('');
    const [maxScore, setMaxScore] = useState('');

    useEffect(() => {
        if (selectedEvaluation) {
            setType(selectedEvaluation.type);
            setMaxScore(selectedEvaluation.maxScore);
        } else {
            setType('');
            setMaxScore('');
        }
    }, [selectedEvaluation]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = selectedEvaluation.id;
        const evaluationData = {id, type, maxScore };

        if (selectedEvaluation) {
            await updateEvaluation(selectedEvaluation.id, evaluationData);
        } else {
            await createEvaluation(evaluationData);
        }

        onSuccess();
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h6>{selectedEvaluation ? 'Editar Evaluación' : 'Agregar Evaluación'}</h6>
                </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Tipo de Evaluación</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tipo de Evaluación"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Puntaje Máximo</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Puntaje Máximo"
                                    value={maxScore}
                                    onChange={(e) => setMaxScore(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-info text-white">
                                    {selectedEvaluation ? 'Actualizar' : 'Guardar'}
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default EvaluationForm;

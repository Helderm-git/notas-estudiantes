import React, { useState, useEffect } from 'react';
import { createGrade, updateGrade } from '../services/GradeService';

const GradeForm = ({ selectedGrade, onSuccess }) => {
    const [studentId, setStudentId] = useState('');
    const [evaluationId, setEvaluationId] = useState('');
    const [score, setScore] = useState('');

    useEffect(() => {
        if (selectedGrade) {
            setStudentId(selectedGrade.student.id);
            setEvaluationId(selectedGrade.evaluation.id);
            setScore(selectedGrade.score);
        } else {
            setStudentId('');
            setEvaluationId('');
            setScore('');
        }
    }, [selectedGrade]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const idGrade = selectedGrade.id;
        const gradeData = {
            id: idGrade,
            student: { id: studentId },
            evaluation: { id: evaluationId },
            score,
        };

        if (selectedGrade) {
            await updateGrade(selectedGrade.id, gradeData);
        } else {
            await createGrade(gradeData);
        }

        onSuccess();
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h6>{selectedGrade ? 'Editar Nota' : 'Agregar Nota'}</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-4">
                            <label className="form-label">ID de Estudiante</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="ID de Estudiante"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">ID de Evaluación</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="ID de Evaluación"
                                value={evaluationId}
                                onChange={(e) => setEvaluationId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Puntaje</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Puntaje"
                                value={score}
                                onChange={(e) => setScore(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-info text-white">
                                {selectedGrade ? 'Actualizar' : 'Guardar'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GradeForm;

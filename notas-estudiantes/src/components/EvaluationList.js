import React from 'react';
import { deleteEvaluation } from '../services/EvaluationService';

const EvaluationList = ({ evaluations, onEdit, onDeleteSuccess }) => {
    const handleDelete = async (id) => {
        await deleteEvaluation(id);
        onDeleteSuccess();
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4 className="text-center">Lista de Evaluaciones</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Puntaje Máximo</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {evaluations.map((evaluation) => (
                                <tr key={evaluation.id}>
                                    <td>{evaluation.type}</td>
                                    <td>{evaluation.maxScore}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(evaluation)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(evaluation.id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvaluationList;

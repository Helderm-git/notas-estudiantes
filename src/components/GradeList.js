import React from 'react';
import { deleteGrade } from '../services/GradeService';

const GradeList = ({ grades, onEdit, onDeleteSuccess }) => {
    const handleDelete = async (id) => {
        await deleteGrade(id);
        onDeleteSuccess();
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4 className="text-center">Lista de Calificaciones</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Puntaje</th>
                                <th>Estudiante ID</th>
                                <th>Alumno</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {grades.map((grade) => (
                                <tr key={grade.id}>
                                    <td>{grade.score}</td>
                                    <td>{grade.student.studentId}</td>
                                    <td>{grade.student.name}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(grade)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(grade.id)}>
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

export default GradeList;

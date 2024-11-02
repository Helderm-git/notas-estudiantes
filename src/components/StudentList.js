import React from 'react';
import { deleteStudent } from '../services/StudentService';

const StudentList = ({ students, onEdit, onDeleteSuccess }) => {
    const handleDelete = async (id) => {
        await deleteStudent(id);
        onDeleteSuccess(); // Refresca la lista tras la eliminación
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4 className="text-center">Lista de Estudiantes</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>ID de Estudiante</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.studentId}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(student)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(student.id)}>
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

export default StudentList;

import React, { useState, useEffect } from 'react';
import { createStudent, updateStudent } from '../services/StudentService';

const StudentForm = ({ selectedStudent, onSuccess }) => {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        if (selectedStudent) {
            setName(selectedStudent.name);
            setStudentId(selectedStudent.studentId);
        } else {
            setName('');
            setStudentId('');
        }
    }, [selectedStudent]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Solo intenta acceder a selectedStudent.id si selectedStudent no es null
        const studentData = {
            id: selectedStudent ? selectedStudent.id : null,
            name,
            studentId
        };

        if (selectedStudent) {
            await updateStudent(selectedStudent.id, studentData);
        } else {
            await createStudent(studentData);
        }

        onSuccess();
    };


    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-info text-white">
                    <h6>{selectedStudent ? 'Editar Estudiante' : 'Agregar Estudiante'}</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre del estudiante"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">ID de Estudiante</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ID de Estudiante"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-info text-white">
                                {selectedStudent ? 'Actualizar' : 'Guardar'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentForm;

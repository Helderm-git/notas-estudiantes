import React, { useState, useEffect } from 'react';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';
import { getStudents } from '../services/StudentService';
import { Link } from 'react-router-dom';

const StudentView = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await getStudents();
        setStudents(result.data);
    };

    const handleEdit = (student) => {
        setSelectedStudent(student);
    };

    const handleSuccess = () => {
        setSelectedStudent(null); // Limpia el formulario después de guardar
        loadStudents(); // Refresca la lista de estudiantes
    };

    return (
        <div className="container">
            <h2 className="text-dark ms-3 mt-3 mb-3">Gestión de Estudiantes</h2>
            <StudentForm selectedStudent={selectedStudent} onSuccess={handleSuccess} />
            <StudentList students={students} onEdit={handleEdit} onDeleteSuccess={loadStudents} />
            <Link to="/" className="btn btn-primary mt-5 ms-3">
                Regresar
            </Link>
        </div>
    );
};

export default StudentView;

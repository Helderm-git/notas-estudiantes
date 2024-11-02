import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Sistema de Gestión de Notas</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Estudiantes</h5>
                            <p className="card-text">Gestiona los estudiantes registrados en el sistema.</p>
                            <Link to="/students" className="btn btn-primary">
                                Ver Estudiantes
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Evaluaciones</h5>
                            <p className="card-text">Gestiona las evaluaciones y asigna puntajes.</p>
                            <Link to="/evaluations" className="btn btn-primary">
                                Ver Evaluaciones
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Notas</h5>
                            <p className="card-text">Consulta y administra las notas de los estudiantes.</p>
                            <Link to="/grades" className="btn btn-primary">
                                Ver Notas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeView;

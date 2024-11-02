import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import StudentView from './views/StudentView';
import EvaluationView from './views/EvaluationView';
import GradeView from './views/GradeView';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/students" element={<StudentView />} />
                <Route path="/evaluations" element={<EvaluationView />} />
                <Route path="/grades" element={<GradeView />} />
            </Routes>
        </Router>
    );
}

export default App;

import axios from 'axios';

const API_URL = 'http://localhost:8282/api/grades';

export const getGrades = async () => await axios.get(API_URL);

export const getGradeById = async (id) => await axios.get(`${API_URL}/${id}`);

export const createGrade = async (grade) => await axios.post(API_URL, grade);

export const updateGrade = async (id, grade) => await axios.put(`${API_URL}/${id}`, grade);

export const deleteGrade = async (id) => await axios.delete(`${API_URL}/${id}`);

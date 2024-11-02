import axios from 'axios';

const API_URL = 'http://localhost:8282/api/students';

export const getStudents = async () => await axios.get(API_URL);

export const getStudentById = async (id) => await axios.get(`${API_URL}/${id}`);

export const createStudent = async (student) => await axios.post(API_URL, student);

export const updateStudent = async (id, student) => await axios.put(`${API_URL}/${id}`, student);

export const deleteStudent = async (id) => await axios.delete(`${API_URL}/${id}`);

import axios from 'axios';

const API_URL = 'http://localhost:8282/api/evaluations';

export const getEvaluations = async () => await axios.get(API_URL);

export const getEvaluationById = async (id) => await axios.get(`${API_URL}/${id}`);

export const createEvaluation = async (evaluation) => await axios.post(API_URL, evaluation);

export const updateEvaluation = async (id, evaluation) => await axios.put(`${API_URL}/${id}`, evaluation);

export const deleteEvaluation = async (id) => await axios.delete(`${API_URL}/${id}`);

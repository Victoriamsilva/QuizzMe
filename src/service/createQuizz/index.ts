import { QuizzModel } from '../../Domain/Entities/quizz/quizz.model';
import api from '../api';

export default async function CreateQuizz(values: QuizzModel) {
  const response = await api.post(
    `${import.meta.env.VITE_API_URL}/quizz`,
    values
  );
  return response;
}

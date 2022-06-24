import api from '../api';

export default async function ListQuizzes(value?: string) {
  const { data } = await api.get(
    `${import.meta.env.VITE_API_URL}/quizz?${value ? '&search=' + value : ''}`
  );
  return data;
}

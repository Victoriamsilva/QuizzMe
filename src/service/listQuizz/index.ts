import api from '../api';

export default async function ListQuizzes(value?: string, page: number = 1) {
  const { data } = await api.get(
    `${import.meta.env.VITE_API_URL}/quizz?page=${page}${
      value ? '&search=' + value : ''
    }`
  );
  return data;
}

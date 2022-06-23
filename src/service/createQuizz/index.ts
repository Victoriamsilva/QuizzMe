import api from '../api';

interface QuizzProps {
  name: string;
  image: string;
  description: string;
}

export default async function CreateQuizz({
  name,
  image,
  description
}: QuizzProps) {
  const response = await api.post(`${import.meta.env.VITE_API_URL}/quizz`, {
    name: name,
    image: image,
    description: description
  });
  return response;
}

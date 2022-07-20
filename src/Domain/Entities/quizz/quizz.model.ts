export interface QuestionProps {
  question: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
}

export interface QuizzProps {
  id: string;
  title?: string;
  image?: string;
  description?: string;
  questions: QuestionProps[];
}

export class QuizzModel {
  id: string;
  title?: string;
  image?: string;
  description?: string;
  questions: QuestionProps[] = [];
  constructor({ title, image, description, id }: QuizzProps) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.questions = [];
    this.image =
      image ||
      'https://st.depositphotos.com/2290789/3667/i/600/depositphotos_36675429-stock-photo-king-lion-aslan.jpg';
  }
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import Header from "../../components/Header";
import PaginatedItems from "../../components/pagination";
import { QuizzModel, QuizzProps } from "../../Domain/Entities/quizz/quizz.model";
import ListQuizzes from "../../service/listQuizz"
import * as S from "./styles";


export default function Home() {
  const [quizzes, setQuizzes] = useState<QuizzModel[]>([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState<QuizzModel[]>([]);
  const [value, setValue] = useState("");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  async function getQuizz() {
    // const response = await ListQuizzes(value);
    const response = {
      data: [
        {
          id: '2',
          title: 'Quizz 1',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
          questions: [
            {
              question: 'Question 1',
              answers: [
                {
                  text: 'Answer 1',
                  isCorrect: true
                }
              ]
            }
          ]
        },
        {
          id: '1',
          title: 'Quizz 1',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
          questions: [
            {
              question: 'Question 1',
              answers: [
                {
                  text: 'Answer 1',
                  isCorrect: true
                }
              ]
            }
          ]
        }
      ]
    }
    setQuizzes(response.data);
  }

  function filterQuizzes(indexOfFirstItem: number, indexOfLastItem: number) {
    if (quizzes.length) {
      const currentItems = quizzes.slice(indexOfFirstItem, indexOfLastItem);
      setFilteredQuizzes(currentItems);
    }

  }

  useEffect(() => {
    filterQuizzes(0, 5);
  }, [quizzes]);

  useEffect(() => {
    getQuizz();
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <Header onClick={getQuizz} onChange={onChange} />
      {quizzes.length
        ? <S.CardsWrapper>
          {filteredQuizzes.map((item: QuizzModel, index: number) => {
            return (

              <Card onClick={() => navigate(`/quizz-details/${item.id}`)} key={index} image={item.image} title={item.title} description={item.description} />
            );
          })}
        </S.CardsWrapper>
        : <h1>Não tem nada aqui</h1>}
      {(quizzes.length > 5)
        ? <PaginatedItems itemsPerPage={5} totalItems={quizzes.length} onSelect={filterQuizzes} />
        : null}
    </>
  )
}
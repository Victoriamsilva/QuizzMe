import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizzModel } from "../../Domain/Entities/quizz/quizz.model";

export function QuizzDetails() {
  const [quizz, setQuizz] = useState({
    id: "1",
    title: "Quizz 1",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
    image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
    questions: [
      {
        question: 'Question 1',
        answers: [
          {
            text: 'Answer 1',
            isCorrect: true
          },
          {
            text: 'Answer 1',
            isCorrect: true
          },
          {
            text: 'Answer 1',
            isCorrect: true
          },
          {
            text: 'Answer 1',
            isCorrect: true
          }
        ]
      }
    ]
  });
  const { id } = useParams();
  // useEffect(() => {

  //   const quizzz = {
  //     id: "1",
  //     title: "Quizz 1",
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
  //     image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg',
  //     questions: [
  //       {
  //         question: 'Question 1',
  //         answers: [
  //           {
  //             text: 'Answer 1',
  //             isCorrect: true
  //           }
  //         ]
  //       }
  //     ]
  //   }
  //   setQuizz(quizzz);
  //   console.log(quizz)
  // }, []);
  return (
    <>
      <h1>{quizz.title}</h1>
      <p>{quizz.description}</p>
      <img src={quizz.image} alt="" />
      <ul>
        {quizz.questions.map((question, index) => (
          <div key={index}>
            <h2>{question.question}</h2>
            <ul>
              {question.answers.map(answer => (
                <li key={answer.text}>{answer.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>

    </>
  );
}

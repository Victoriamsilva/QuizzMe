import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import Header from "../../components/Header";
import PaginatedItems from "../../components/Pagination";
import ListQuizzes from "../../service/listQuizz"
import * as S from "./styles";


export default function Home() {
  const [quizzes, setQuizzes] = useState<any>([{}]);
  const [filteredQuizzes, setFilteredQuizzes] = useState<any>([{}]);
  const [value, setValue] = useState("");

  function onChange(event: any) {
    setValue(event.target.value);
  }

  async function getQuizz() {
    // const response = await ListQuizzes(value);
    const response = {
      data: [
        {
          title: 'Quizz 1',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 2',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 4',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 5',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 6',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 7',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 8',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 9',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 10',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz 11',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        },
        {
          title: 'Quizz',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui itaque cum dolorem voluptatibus ipsa animi hic rerum. Totam incidunt repellendus ut veniam, sapiente adipisci iusto numquam quisquam facere maiores?',
          image:
            'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg'
        }
      ]
    }
    setQuizzes(response.data);
  };

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

  return (
    <>
      <Header onClick={getQuizz} onChange={onChange} />
      {quizzes.length
        ? <S.CardsWrapper>
          {filteredQuizzes.map((item: any, index: number) => {
            return (
              <Card key={index} image={item.image} title={item.title} description={item.description} />
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
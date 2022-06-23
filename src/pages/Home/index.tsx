import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import Header from "../../components/Header";
import PaginatedItems from "../../components/Pagination";
import ListQuizzes from "../../service/listQuizz"
import * as S from "./styles";

export default function Home() {
  const [quizzes, setQuizzes] = useState<any>([{}]);
  const [value, setValue] = useState("");

  function onChange(event: any) {
    setValue(event.target.value)
  }

  async function getQuizz(page = 0) {
    // const response = await ListQuizzes(value, page);
    const response = {
      data: [
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
      ],
      metaData: {
        page: 2,
        total: 200
      }
    }
    setQuizzes(response.data);
  };

  useEffect(() => {
    getQuizz();
  }, []);

  return (
    <>
      <Header onClick={getQuizz} onChange={onChange} />
      <S.CardsWrapper>
        {quizzes.map((item: any, index: number) => {
          return (
            <Card key={index} image={item.image} title={item.title} description={item.description} />
          );
        })}
      </S.CardsWrapper>
      <PaginatedItems itemsPerPage={5} totalItems={20} onSelect={getQuizz} />
    </>
  )
}
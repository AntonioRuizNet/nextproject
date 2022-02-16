import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

//Components
import Container from './components/Container'
import { Users } from './components/Card/Card'
import { Pagination } from "./components/Pagination/Pagination";

//Style
import 'bootswatch/dist/yeti/bootstrap.min.css';
import { MainStyled } from "./Global.styled";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const Index: NextPage = (props: any) => {

  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(0);
  const [itemsPage, setItemsPage] = useState<number>(12);

  useEffect(() => {
    setCharacters(props.data.results);
  }, [page]);

  const changePage = (pag: number) => {
    setPage(pag);
  };

  return (
    <Container>
      <h1>Personajes</h1>
      <MainStyled>
        {characters.length > 0 &&
          characters
            .filter((el: any, index: number) => {
              return index > page * 10 - 1 && index < page * 10 + itemsPage;
            })
            .map((e: any) => {
              return <Users {...e} />;
            })}
      </MainStyled>
      <Pagination
        page={page}
        maxelements={characters.length}
        setPage={changePage}
      />
      {console.log(props)}
    </Container>
  )
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://rickandmortyapi.com/api/character/')
  const data = await res.json()
  return { data: data }
}

export default Index;
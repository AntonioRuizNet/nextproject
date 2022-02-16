import { useRouter } from "next/router";

//Components
import Container from "../components/Container";

const Users = (props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(props);
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {props ? (
            <div className="card">
              <div className="card-header text-center">Ficha detallada</div>
              <div className="card-body text-center">
                <p>Identificador: {id}</p>
                <p>Nick: -</p>
                <p>Email: -</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Container>
  );
};

Users.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${ctx.query.id}`
  );
  const data = await res.json();
  return { users: data };
};

export default Users;

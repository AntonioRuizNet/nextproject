import Link from "next/link";

//Styled
import { CardStyled, ImgStyled } from "./Card.styled";

interface Card {
  id: Number;
  name: String;
  image: String;
}

export const Users = ({ id, name, image }: Card) => {
  return (
    <>
      {
        <CardStyled key={id}>
          <ImgStyled image={image}></ImgStyled>
          {name.length > 10
            ? `${name}`
            : name}
          <Link href={`/users/${id}`}>
            <a>
              <button className="btn btn-info form-control">Detalles</button>
            </a>
          </Link>
        </CardStyled>
      }
    </>
  );
};


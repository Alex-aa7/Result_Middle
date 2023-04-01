import { Link } from "react-router-dom";

export function ListLinkComponent({el}) {
  return (
    <>
      <Link key={el.id} to={`${el.id}`}>
        <li>{el.name}</li>
      </Link>
    </>
  );
}

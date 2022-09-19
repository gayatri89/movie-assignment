import { Link } from "react-router-dom";

export const MovieGenres = (props) => {
  const slug = props.gen.toLocaleLowerCase();
  return <Link to={slug}>{props.gen}</Link>;
};

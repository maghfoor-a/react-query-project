import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function RQFetchData() {
  return axios.get("https://hp-api.onrender.com/api/characters");
}
export default function ReactQueryCharacters(): JSX.Element {
  const { isLoading, data } = useQuery("characters", RQFetchData);

  if (isLoading) {
    return <h1>Getting Data...</h1>;
  }
  return (
    <>
      <h1>React Query Page</h1>
      <li>
        <Link to={"/"}>Home Page</Link>
      </li>
      <li>
        <Link to={"/characters"}>Normal way to fetch data</Link>
      </li>
      <hr />
      {data?.data.map((character: any) => {
        return (
          <div className="character" key={character.id}>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </>
  );
}

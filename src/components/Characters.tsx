import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Characters(): JSX.Element {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<null | string>(null)

    async function fetchData() {
        try {
            const response = await axios.get(
                "https://hp-api.onrender.com/api/characters"
            );
            setData(response.data);
            setLoading(false);
        }
        catch (error: any) {
            setErrorMessage(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Getting Data...</h1>;
    }

    if (errorMessage) {
        return <h1>{errorMessage}</h1>
    }

    return (
        <>
            <h1>Normal Page</h1>
            <li>
                <Link to={"/"}>Home Page</Link>
            </li>
            <li>
                <Link to={"/react-query"}>React Query Page</Link>
            </li>
            <hr />
            {data.map((character) => {
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

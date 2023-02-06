import axios from "axios";
import { useEffect, useState } from "react"

export default function Characters(): JSX.Element {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);

    async function fetchData() {
        const response = await axios.get("https://hp-api.onrender.com/api/characters")
        setData(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <h1>Getting Data...</h1>
    }

    return (
        <>
            <h1>Normal Page</h1>
            <li><a href="/">Home Page</a></li>
            <hr />
            {data.map((character) => {
                return (
                    <div className="character" key={character.id}>
                        <p>{character.name}</p>
                        <img src={character.image} alt={character.name} />
                    </div>
                )
            })}

        </>
    )
}
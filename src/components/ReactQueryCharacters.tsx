import axios from "axios"
import { useQuery } from "react-query"

export default function ReactQueryCharacters(): JSX.Element {

    const { isLoading, data } = useQuery("characters", () => {
        return axios.get("https://hp-api.onrender.com/api/characters")
    })

    if (isLoading) {
        return <h1>Getting Data...</h1>
    }
    return (
        <>
            <h1>React Query Page</h1>
            <li><a href="/">Home Page</a></li>
            <hr />
            {data?.data.map((character: any) => {
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
import { Link } from "react-router-dom";
import ReactQueryCharacters from "./ReactQueryCharacters";

export default function HomePage(): JSX.Element {
    return (
        <>
            <h1>Home Page</h1>
            <li><Link to="/characters">Normal way to fetch data Page</Link></li>
            <li><Link to="/react-query">React Query Page</Link></li>

        </>
    )
}
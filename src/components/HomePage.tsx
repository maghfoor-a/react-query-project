export default function HomePage(): JSX.Element {
    return (
        <>
            <h1>Home Page</h1>
            <li><a href="/characters">Normal way to fetch characters</a></li>
            <li><a href="/react-query">React Query to fetch characters</a></li>

        </>
    )
}
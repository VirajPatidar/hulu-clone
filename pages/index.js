import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

//This will render on client side

export default function Home({ results }) {
    // destructuring the result
    return (
        <div>
            <Head>
                <title>Hulu Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Nav />
            {/* pass the result as props to the result component */}
            {/* it takes an array as props and renders it on frontend */}
            <Results results={results} />
        </div>
    );
}


// This will render on server side
// Server side rendering happens first 
// After SSR, content gets delivered to the client
// here context includes important details of the url given by the user

export async function getServerSideProps(context) {
    //extracting genre from the url
    const genre = context.query.genre;
    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

    return {
        props: {
            results: request.results,
        },
    };
}

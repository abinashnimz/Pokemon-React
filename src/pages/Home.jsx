import { useState, useEffect } from "react";
import { PokemonCard } from "../components/PokemonCard";

export const Home = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const fetchData = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            const pokemonData = data.results;
            const eachPokemon = pokemonData.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data
            });

            const detailedPokemon = await Promise.all(eachPokemon);
            if (detailedPokemon) {
                setPokemon(detailedPokemon);
                setLoading(false);
            }
        }
        catch (err) {
            console.log(err);
            setLoading(false);
            setError(err.message);
        }


    }
    useEffect(() => {
        fetchData();
    }, []);

    // console.log(pokemon);

    return (<>
        <div className="bg-blue-100 flex flex-col items-center min-h-screen">
            <h1 className="my-8 p-4 text-4xl font-semibold">Let's Catch Pokemon</h1>
            <div className="p-4 grid grid-cols-4 gap-6 mb-10">
                {pokemon && (
                    pokemon.map((curPokemon)=>
                        <PokemonCard key={curPokemon.id} pokemon={curPokemon}/>
                    )
                )}
            </div>
        </div>
    </>)
}
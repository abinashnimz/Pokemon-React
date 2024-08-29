export const PokemonCard = ({ pokemon }) => {
    console.log(pokemon);
    return (<>
        <div className="bg-white p-4 shadow-md rounded hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-center p-4">
                <figure>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="h-[120px] w-[120px]" />
                </figure>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-3xl p-4 font-bold capitalize">{pokemon.name}</p>
                <p className="text-md capitalize px-8 py-2 rounded-full bg-green-500 text-white font-semibold">{pokemon.types.map((item) => item.type.name).join(", ")}</p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                <div className="grid grid-cols-3 text-xs gap-2">
                    <div className="flex justify-center">
                        <p className="font-semibold">Height: </p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-semibold">Weight: </p>
                        <p> {pokemon.weight}</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-semibold">Speed: </p>
                        <p>{pokemon.stats[5].base_stat}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 text-xs gap-2">
                    <div className="flex flex-col items-center">
                        <p className="font-semibold">Experience</p>
                        <p>{pokemon.base_experience}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-semibold">Attack</p>
                        <p>{pokemon.stats[1].base_stat}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="font-semibold">Ability</p>
                        <p>{pokemon.abilities.map((curAbility) => curAbility.ability.name).slice(0, 1).join(", ")}</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
"use client";

const PokemonDetail = ({ params }) => {
  const { id } = params;

  console.log(id);

  return (
    <section>
      <h1>PokemonDetail</h1>
    </section>
  );
};

export default PokemonDetail;

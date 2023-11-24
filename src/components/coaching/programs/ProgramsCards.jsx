/* eslint-disable react/prop-types */
import ProductCard from '../../Product/card/ProductCard';

function ProgramsCards({ data = [], setRefresh = () => {} }) {
  return (
    <>
      <ul className="flex flex-col gap-6 sm:pr-5 w-full h-[40dvh] overflow-y-scroll overflow-x-hidden">
        {data.map((program) => (
          <ProductCard
            key={program.id}
            id={program.id}
            image={program.image}
            title={program.title}
            category={program.programType}
            date={program.sessions}
            subscribersCount={program.subscribersCount}
            targerCousesRefetch={setRefresh}
            path={`/products/coaching_programs/${program.id}`}
            endPointDelete={() => {}}
            isProgram={true}
          />
        ))}
      </ul>
    </>
  );
}

export default ProgramsCards;

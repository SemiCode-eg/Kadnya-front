/* eslint-disable react/prop-types */
import ProductCard from '../../Product/card/ProductCard';

function ProgramsCards({ data = [], setRefresh = () => {} }) {
  return (
    <>
      <ul className="flex flex-col gap-6 sm:pr-5 w-full h-[40dvh] overflow-y-scroll overflow-x-hidden">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            category={item.programType}
            date={item.sessions}
            subscribersCount={item.subscribersCount}
            targerCousesRefetch={setRefresh}
            path="clients"
            endPointDelete={() => {}}
            isProgram={true}
          />
        ))}
      </ul>
    </>
  );
}

export default ProgramsCards;

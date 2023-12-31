/* eslint-disable react/prop-types */
import { deleteCoachProgram } from '../../../api/coach'
import ProductCard from '../../Product/card/ProductCard'

function ProgramsCards({ data = [], setRefetch = () => {} }) {
  return (
    <>
      <ul className="flex flex-col gap-6 sm:pr-5 w-full h-[40dvh] overflow-y-scroll overflow-x-hidden">
        {data.map(program => (
          <ProductCard
            key={program.id}
            id={program.id}
            image={program.image}
            title={program.title}
            category={program.session_type}
            date={program.session_count}
            subscribersCount={program.subscription_count}
            setRefetch={setRefetch}
            path={`/products/coaching_programs/${program.id}`}
            editPath={`/products/coaching_programs/${program.id}/settings`}
            endPointDelete={deleteCoachProgram}
            isProgram={true}
          />
        ))}
      </ul>
    </>
  )
}

export default ProgramsCards

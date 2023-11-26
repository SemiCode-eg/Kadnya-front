/* eslint-disable react/prop-types */

function NoEvent({ title }) {
  return (
    <>
      <p className="w-full border-b border-neutral-400 pb-5 text-start">
        0 Events
      </p>
      <div className="mt-10 text-center text-neutral-500 text-normal italic">
        No {title} events
      </div>
    </>
  )
}

export default NoEvent

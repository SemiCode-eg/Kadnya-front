/* eslint-disable react/prop-types */

function NoEvent({ title }) {
  return (
    <div className="text-start p-2">
      <p className="w-full border-b border-neutral-400 pb-5">0 Events</p>
      <div className="mt-10 text-center text-neutral-500 text-normal italic">No {title} events</div>
    </div>
  );
}

export default NoEvent;

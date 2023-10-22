/* eslint-disable react/prop-types */
import { Note, PencilSimple } from '@phosphor-icons/react';

function ModuleLesson({ text }) {
  return (
    <div className="flex justify-between flex-1 mr-2">
      <div className="flex items-end gap-2">
        <Note size={30} className="text-slate-400" />
        <p className="font-light">{text}</p>
      </div>
      <div className="flex items-center gap-2">
        <button>
          <PencilSimple size={20} weight="bold" />
        </button>
      </div>
    </div>
  );
}

export default ModuleLesson;

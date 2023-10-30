/* eslint-disable react/prop-types */
import { Note, PencilSimple } from '@phosphor-icons/react';
import { Link, useParams } from 'react-router-dom';

function ModuleLesson({ text, addBorder, lessonID }) {
  const { id } = useParams();

  return (
    <div
      className={`flex justify-between flex-1 mr-2 py-2.5 ${
        addBorder ? 'border-t border-t-gray-300/80' : 'pt-0'
      }`}
    >
      <div className="flex items-end gap-2">
        <Note size={30} className="text-slate-400" />
        <p className="font-light">{text}</p>
      </div>
      <div className="flex items-center gap-2">
        <Link to={`/products/courses/${id}/edit-lesson/${lessonID}`}>
          <PencilSimple size={20} weight="bold" />
        </Link>
      </div>
    </div>
  );
}

export default ModuleLesson;
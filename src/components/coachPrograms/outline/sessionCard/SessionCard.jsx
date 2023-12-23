import { DotsThreeOutline } from '@phosphor-icons/react'
import SettingMenu from '../../../menu'
import SessionDetails from './sessionDetails'
import { Link } from 'react-router-dom'

function SessionCard({ session }) {
  return (
    <Link
      to={`/products/coaching_programs/5/outline/session/${session.id}`}
      className="border-[1px] shadow-sm border-[#ddd] rounded-lg flex justify-between 
                items-center gap-5 py-2 px-3 hover:border-teal-500 duration-150 ease-in
      ">
      <SessionDetails title={session.title} />

      <SettingMenu
        id={session.id}
        buttonIcon={<DotsThreeOutline size={18} weight="bold" />}
        previewPath={`/products/coaching_programs/5/outline/session/${session.id}`}
        isComment={false}
        isEdit={false}
        isDuplicate={false}
      />
    </Link>
  )
}

export default SessionCard

import { CurrencyCircleDollar, Headphones, Users } from '@phosphor-icons/react'
import OverViewCard from './OverViewCard'
import useSessionsOverview from '../../../../hooks/use-sessions-overview'
import HandleErrorLoad from '../../../handleErrorLoad'

function DashboardOverView() {
  const { overviewData, loading, errorMsg } = useSessionsOverview()

  return (
    <div className="flex-[0.4] shadow-sm p-5 rounded-[15px] border">
      <p className="text-sky-950 text-lg text-left font-semibold mb-5">
        Overview
      </p>
      <div className="flex flex-col gap-5">
        <HandleErrorLoad loading={loading} errorMsg={errorMsg}>
          <OverViewCard
            title="active clients"
            count={overviewData.active_users_count}
            icon={<Users size={25} />}
            backgroundColor="#eee4f6"
            iconColor="#50348a"
          />
          <OverViewCard
            title="completed sessions"
            count={overviewData.completed_sessions_count}
            icon={<Headphones size={25} />}
            backgroundColor="#e6f4fe"
            iconColor="#054fb8"
          />
          <OverViewCard
            title="revenue"
            count={overviewData.revenue_last_30_days}
            icon={<CurrencyCircleDollar size={25} />}
            backgroundColor="#ddf8f0"
            iconColor="#225d53"
            isRevenue={true}
          />
        </HandleErrorLoad>
      </div>
    </div>
  )
}

export default DashboardOverView

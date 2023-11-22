import { CurrencyCircleDollar, Headphones, Users } from '@phosphor-icons/react';
import OverViewCard from './OverViewCard';

function DashboardOverView() {
  return (
    <div className="flex-[0.4] shadow-sm p-5 rounded-[15px] border">
      <p className="text-sky-950 text-lg text-left font-semibold mb-5">
        Overview
      </p>
      <div className="flex flex-col gap-5">
        <OverViewCard
          title="active clients"
          count="0"
          icon={<Users size={25} />}
          backgroundColor="#eee4f6"
          iconColor="#50348a"
        />
        <OverViewCard
          title="completed sessions"
          count="0"
          icon={<Headphones size={25} />}
          backgroundColor="#e6f4fe"
          iconColor="#054fb8"
        />
        <OverViewCard
          title="revenue"
          count="0"
          icon={<CurrencyCircleDollar size={25} />}
          backgroundColor="#ddf8f0"
          iconColor="#225d53"
          isRevenue={true}
        />
      </div>
    </div>
  );
}

export default DashboardOverView;

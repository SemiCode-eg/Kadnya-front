import DashboardSessions from '../../../components/coaching/dashboard/DashboardSessions';

function CoachingDashboard() {
  return (
    <div className="flex lg:flex-row flex-col">
      <DashboardSessions />
      <div className="flex-[0.25]">
        <p className="text-sky-950 text-lg">Overview</p>
      </div>
    </div>
  );
}

export default CoachingDashboard;

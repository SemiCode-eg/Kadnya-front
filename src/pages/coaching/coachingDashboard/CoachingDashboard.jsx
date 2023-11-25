import DashboardOverView from '../../../components/coaching/dashboard/overview/DashboardOverView';
import DashboardSessions from '../../../components/coaching/dashboard/sessions/DashboardSessions';

function CoachingDashboard() {
  return (
    <div className="flex lg:flex-row flex-col gap-5">
      <DashboardSessions />
      <DashboardOverView />
    </div>
  );
}

export default CoachingDashboard;

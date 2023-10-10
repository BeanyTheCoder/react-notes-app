import "../../stylesheets/Dashboard.scss";
import DashboardSecondary from "./DashboardSecondary";
import DashboardSearch from "./DashboardSearch.jsx";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <DashboardSearch />
      <DashboardSecondary />
    </section>
  );
}

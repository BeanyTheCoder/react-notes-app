import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import DashboardTab from "./DashboardTab";

export default function DashboardSecondary() {
  return (
    <div className="dashboard__secondary">
      <div className="dashboard__secondary__tabs">
        <DashboardTab color="" text="All" />
        <DashboardTab color="#ff9100" text="Home" />
        <DashboardTab color="pink" text="Work" />
        <DashboardTab color="green" text="Personal" />
      </div>
      <div className="dashboard__secondary__cta">
        <button>
          <FontAwesomeIcon icon={faPlus} /> Add Note
        </button>
      </div>
    </div>
  );
}

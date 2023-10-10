import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function DashboardSearch() {
  return (
    <div className="dashboard__search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="--icon" />
      <input
        type="text"
        className="dashboard__search__input"
        name="search"
        id="search"
        placeholder="Search notes..."
      />
    </div>
  );
}

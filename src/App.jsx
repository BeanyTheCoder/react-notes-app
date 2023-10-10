import "./stylesheets/App.scss";
import Dashboard from "./components/dashboard/Dashboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  let version = 0.1;
  return (
    <div id="app">
      <Dashboard />
      <section className="main">
        <div className="main__progress-bar">
          <span>You have 0/4 notes completed</span>
          {/* bar */}
        </div>
        <div className="main__notes">
          <div className="main__notes__item">
            <div className="main__notes__item__dashboard">
              {/* checkbox */}
              <h1>Meeting with Jane</h1>
              <div className="main__notes__item__dashboard__options">
                <FontAwesomeIcon icon={faPen} />
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
            </div>
            <div className="main__notes__item__body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                ullam veniam voluptates eius labore nostrum, accusantium vero
                corrupti harum illo voluptate at? Ipsam voluptates facere nobis
                illo, corrupti doloribus assumenda!
              </p>
            </div>
            <div className="main__notes__item__timestamp">
              <span>Sep 17, 2013</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

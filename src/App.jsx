import "./stylesheets/App.scss";

export default function App() {
  let version = 0.1;
  return (
    <div id="app">
      <section className="dashboard">
        <div className="dashboard__search">
          {/* search icon */}
          <input
            type="text"
            className="dashboard__search__input"
            name="search"
            id="search"
          />
        </div>
        <div className="dashboard__secondary">
          <div className="dashboard__secondary__tabs">
            <div className="dashboard__secondary__tabs__item">All</div>
            <div className="dashboard__secondary__tabs__item">Home</div>
            <div className="dashboard__secondary__tabs__item">Work</div>
            <div className="dashboard__secondary__tabs__item">Person</div>
          </div>
          <div className="dashboard__secondary__cta">
            <button>
              {/* add icon */}
              Add Note
            </button>
          </div>
        </div>
      </section>

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
                {/* edit */}
                {/* delete */}
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

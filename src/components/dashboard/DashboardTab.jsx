import { useRef, useEffect } from "react";

export default function DashboardTab({ color, type, text }) {
  let tabRef = useRef();
  useEffect(() => {
    tabRef.current.style.setProperty("--bg-cc", color);
  });

  return (
    <div className="dashboard__secondary__tabs__item --active" ref={tabRef}>
      {text}
    </div>
  );
}

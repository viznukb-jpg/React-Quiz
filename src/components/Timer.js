import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1 * 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  const formatedMins = String(mins).padStart(2, "0");
  const formatedSecs = String(secs).padStart(2, "0");

  return (
    <div className="timer">
      {formatedMins}:{formatedSecs}
    </div>
  );
}

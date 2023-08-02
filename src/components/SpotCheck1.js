import React, { useState } from "react";

function SpotCheck1() {
  const [num, setNum] = useState(0);
  const onEnter = () => setNum(num + 1);
  const onLeave = () => setNum(num - 1);

  return (
    <>
      <p>{num}</p>
      <button onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {num}
      </button>
    </>
  );
}

export default SpotCheck1;

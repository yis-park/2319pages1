import { useEffect, useRef } from "react";

function Resize2() {
  console.log("리사이즈");
  const width = useRef(null); //돔을 직접적으로 제어하고자 할 때 useRef(); 사용

  useEffect(() => {
    window.addEventListener("resize", () => {
      width.current = window.innerWidth;
      console.log(width.current);
    });
  }, []);
  return (
    <>
      <h1>리사이즈 2</h1>
    </>
  );
}

export default Resize2;

import { useEffect, useRef } from "react";
import Layout from "../components/layout/simpleheader";

function Explore() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      container.classList.add("cursor-grabbing");
      startPos.current = {
        x: e.clientX,
        y: e.clientY,
        scrollLeft: container.scrollLeft,
        scrollTop: container.scrollTop,
      };
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;
      container.scrollLeft = startPos.current.scrollLeft - dx;
      container.scrollTop = startPos.current.scrollTop - dy;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      container.classList.remove("cursor-grabbing");
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Layout title={"Geldingmire"}>
      <div
        ref={containerRef}
        className=" overflow-auto  cursor-grab select-none"
      >
        <div id="map" className="map w-[1024px] h-[800px]">
          <img
            src="explore/island2.png"
            className="w-full h-full object-none"
            alt="Island"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Explore;

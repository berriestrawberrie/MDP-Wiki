import { useState } from "react";

function Cards({ name, desc, smallImg, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className=" relative m-2 bg-gradient-to-b from-cyan-200 bg-sky-300 h-[125px] w-[100px] sm:h-[175px] sm:w-[150px] rounded-3xl hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="group absolute -left-[20px] -top-[20px]">
          <img src={smallImg} className="block" />
          <div className="absolute -bottom-[5px] left-[10px] w-full h-[40px]  bg-opacity-50 text-black flex items-center justify-center text-sm rounded-xl opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 npc">
            {name}
          </div>
        </div>
      </div>
      {/*NPC MODAL*/}
      {isOpen && (
        <div className="fixed top-0 left-0 bg-black/70 w-full h-full z-60 flex justify-center items-center">
          <div className="relative bg-gradient-to-b from-cyan-200 to-sky-300 w-[80%]  max-h-[80%] sm:w-1/2  p-2 ps-4 rounded-xl flex flex-col sm:flex-row items-center">
            <img
              className="absolute -top-[15px] -right-[10px] w-[40px] hover:cursor-pointer"
              src="ui/closebutton.png"
              onClick={() => setIsOpen(!isOpen)}
            />
            <img className="max-w-3/4 sm:max-w-1/2 " src={image} />
            <div className="w-full sm:w-1/2 text-center max-h-[300px] overflow-y-auto">
              <h4>
                <span className="text-black">{name}</span>
              </h4>
              <p className="text-xs">{desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;

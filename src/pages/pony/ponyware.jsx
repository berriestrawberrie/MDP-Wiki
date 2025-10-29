import Layout from "../../components/layout/simpleheader";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { useState } from "react";

function Ponyware() {
  const [headOn, setHeadOn] = useState(false);
  const [neckOn, setNeckOn] = useState(false);
  const [faceOn, setFaceOn] = useState(false);
  const [tailOn, setTailOn] = useState(false);
  return (
    <>
      <Layout title={"Ponyware"}>
        <div>
          <img className="w-36 mx-auto" src="ponyware/29.png" />
          <h3>Introduction</h3>
          <p>
            Ponyware is a customizable costume system for your ponies, designed
            to enhance both their personality and performance. Think of it as
            wearable flair with functional perks—each piece of Ponyware can be
            equipped to specific parts of your pony’s body:
          </p>
          <table>
            <tr className="tr-blue">
              <td>Equip</td>
              <td>Examples</td>
            </tr>
            <tr>
              <td>Body</td>
              <td>Capes, coats, armor sets</td>
            </tr>
            <tr>
              <td>Legs</td>
              <td>Leg wraps, stockings, racing bands</td>
            </tr>
            <tr>
              <td>Face</td>
              <td>Masks, makeup, goggles</td>
            </tr>
            <tr>
              <td>Head</td>
              <td>Hats, helmets, tiaras</td>
            </tr>
            <tr>
              <td>Neck</td>
              <td>Scarves, chokers, medals</td>
            </tr>
            <tr>
              <td>Tail</td>
              <td>Ribbons, braids, tassels</td>
            </tr>
            <tr>
              <td>Hooves</td>
              <td>Shoes, boots, polish, anklets</td>
            </tr>
          </table>
          <h3>Stat Enhancement</h3>
          Dressing up your ponies in items will also give their stats a boost in
          contests. This system is still in development more to come on how it
          impacts game play soon.
          <h3>Dressing Ponies</h3>
          <p className="mb-3">
            Currently for the game's release I am planning on only adult ponies
            being able to wear outfits. In future updates I would like to make
            items that are specifically equippable for fillies and colts. . You
            will be able to equip and unequip items to your pony's different
            item slots. Currently the layering is not editable this may change
            in the future, to give adventurers more freedom to customize their
            pony's vibe. For example you can try dressing{" "}
            <b>Sir Meowington III </b> uisng the toggles below:
          </p>
          {/*TOGGLE BUTTONS */}
          <div className="flex flex-wrap justify-evenly">
            <button
              className="flex flex-col-reverse items-center gap-2 text-sky-500 font-bold"
              onClick={() => {
                setHeadOn(!headOn);
              }}
            >
              {headOn ? (
                <FaToggleOn className="text-3xl text-sky-500" />
              ) : (
                <FaToggleOff className=" text-3xl text-sky-500" />
              )}{" "}
              Head
            </button>
            <button
              className="flex flex-col-reverse items-center gap-2 text-sky-500 font-bold"
              onClick={() => {
                setFaceOn(!faceOn);
              }}
            >
              {faceOn ? (
                <FaToggleOn className="text-3xl text-sky-500" />
              ) : (
                <FaToggleOff className=" text-3xl text-sky-500" />
              )}{" "}
              Face
            </button>
            <button
              className="flex flex-col-reverse items-center gap-2 text-sky-500 font-bold"
              onClick={() => {
                setNeckOn(!neckOn);
              }}
            >
              {neckOn ? (
                <FaToggleOn className="text-3xl text-sky-500" />
              ) : (
                <FaToggleOff className=" text-3xl text-sky-500" />
              )}{" "}
              Neck
            </button>
            <button
              className="flex flex-col-reverse items-center gap-2 text-sky-500 font-bold"
              onClick={() => {
                setTailOn(!tailOn);
              }}
            >
              {tailOn ? (
                <FaToggleOn className="text-3xl text-sky-500" />
              ) : (
                <FaToggleOff className=" text-3xl text-sky-500" />
              )}{" "}
              Tail
            </button>
          </div>
          <div className=" relative min-h-[320px]  sm:min-h-[500px]">
            <img className="absolute top-0" src="ponyware/KITT-MALE.png" />
            {headOn && (
              <img
                id="head"
                className="absolute top-0"
                src="ponyware/head.png"
              />
            )}
            {neckOn && (
              <img
                id="neck"
                className="absolute top-0"
                src="ponyware/neck.png"
              />
            )}
            {tailOn && (
              <img
                id="tail"
                className="absolute top-0"
                src="ponyware/tail.png"
              />
            )}
            {faceOn && (
              <img
                id="face"
                className="absolute top-0"
                src="ponyware/face.png"
              />
            )}
          </div>
          <p>
            Fancy isn't he, but this is just a small example of what will be
            possible in the game. My dream is to have lots of different items
            for adventurers to apply to their ponies. Not just from my
            imagination but I would like to have events for adventurers to
            submit their own ideas to be turned into equipable items in the
            game.{" "}
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Ponyware;

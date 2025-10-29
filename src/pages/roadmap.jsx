import Layout from "../components/layout/simpleheader";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";

import { IoCaretUp } from "react-icons/io5";
import { Link, Element } from "react-scroll";

export default function Roadmap() {
  return (
    <>
      <Layout title={"Roadmap"} />
      <Link
        to="#top"
        className="fixed bottom-[10px] z-10 right-[10px] animate-bounce"
        smooth={true}
        duration={800}
      >
        <IoCaretUp className="text-xl text-sky-400" />
      </Link>
      <Element name="#top">
        <div className="flex flex-wrap justify-center gap-2">
          <Link to="#games" className="quicklink" smooth={true} duration={800}>
            #GameFeatures
          </Link>
          <Link to="#ponys" className="quicklink" smooth={true} duration={800}>
            #PonyFeatures
          </Link>
          <Link
            to="#avatars"
            className="quicklink"
            smooth={true}
            duration={800}
          >
            #AvatarFeatures
          </Link>
          <Link to="#storys" className="quicklink" smooth={true} duration={800}>
            #StoryFeatures
          </Link>
        </div>
      </Element>

      <h3>Introduction</h3>
      <p className="mb-20 p-4">
        The pony game roadmap is organized into four categories: Pony Features,
        where you'll care for, customize, your ponies; Avatar Features, which
        let you express yourself with outfits, and skills that change your game
        play; Game Features, covering core mechanics like exploration,
        mini-games, and seasonal events; and Story Features, where characters
        and lore unfold through quests and dialogue. Each phase builds toward a
        unique immersive world full of pony-powered charm. Unfortunately because
        I am a solo developer I cannot give an accurate esitmate of time for
        these tasks but I will update as I get things done. You can follow us on
        tumblr for the latest development news!👍🏽
      </p>
      {/*START OF THE ROADMAP */}
      <div className="flex flex-col gap-2 justify-evenly items-center md:items-start md:flex-row">
        <div className="bg-sky-200 relative roadmap-div rounded-lg  p-2">
          <div className="roadmap   absolute -top-[50px]   h-[60px] flex justify-center items-center">
            <Element name="#games">Game Features</Element>
          </div>
          <ul className="w-full">
            <li className="flex gap-2 items-center -ms-6">
              <ImCheckboxChecked className="text-amber-950" /> Login / Sign-Up
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" /> Password Reset
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Account Confirmation
            </li>

            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Forums
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Direct Messaging
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Notifications
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Weather System
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Report Ticketing System
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              NPC Shop Buy Items
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              NPC Socializing Interactions
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              NPC Characters (3/TBD)
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              NPC Quests
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              NPC Surrender
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              World Map
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Farming
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Cooking / Alchemy ??
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Berries - MiniPets
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Custom Pony Stickers
            </li>
            <li className="flex gap-2 items-center  -ms-6">
              <ImCheckboxUnchecked className="text-amber-950" />
              Player Sticker Shops
            </li>
          </ul>
        </div>
        {/*PONY FEATURES START HERE */}
        <div>
          <div className="bg-sky-200 relative roadmap-div rounded-lg  p-2">
            <div className="roadmap   absolute -top-[50px]   h-[60px] flex justify-center items-center">
              <Element name="#ponys">Pony Features</Element>
            </div>
            <ul className="w-full">
              <li className="flex gap-2 items-center -ms-6">
                <ImCheckboxChecked className="text-amber-950" /> Breeding
                Mechanic
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Inbreeding
                Mechanic
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" />
                Trait Dominance
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                LegTrait (1/4)
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                BodyTrait (3/4)
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                FaceTrait (3/4)
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                HairTrait (3/4)
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" />
                Color Mixing
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                Pony Types (4/6)
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                Seasonal Types (0/3)
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                Hybrid Ponies (0/2)
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                Glimmerpanes
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                Pony Stickers
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                Buy/Sell Ponies
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" />
                Ponyware
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" />
                Pony Generator
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" />
                Test Breeding
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" />
                Nursery
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" />
                Stables
              </li>
            </ul>
          </div>
        </div>
        {/*AVATAR FEATURES START HERE */}
        <div>
          <div className="bg-sky-200 relative roadmap-div rounded-lg  p-2">
            <div className="roadmap   absolute -top-[50px]   h-[60px] flex justify-center items-center">
              <Element name="#avatars"> Avatar Features</Element>
            </div>
            <ul className="w-full">
              <li className="flex gap-2 items-center -ms-6">
                <ImCheckboxChecked className="text-amber-950" /> Avatar Bases
                (5/14)
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Starter Sets
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" />
                Avatar Coloring
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" /> Avatar Skills
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Avatar Skill
                Tree
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Avatar
                Mastery Skills
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Profile Pages
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Avatar Skill
                Reset
              </li>
            </ul>
          </div>
        </div>
        {/*AVATAR FEATURES START HERE */}
        <div>
          <div className="bg-sky-200 relative roadmap-div rounded-lg  p-2">
            <div className="roadmap   absolute -top-[50px]   h-[60px] flex justify-center items-center">
              <Element name="#storys">Story Features</Element>
            </div>
            <ul className="w-full">
              <li className="flex gap-2 items-center -ms-6">
                <ImCheckboxChecked className="text-amber-950" /> Origin
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Main Story
                Line
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Felkin Tribe
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Direborn
                Tribe
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Human Nation
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Flora Colony
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Fauna Empire
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Equestrial
                Herd
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Oceanic Pod
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Kittling
                Backstory
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxChecked className="text-amber-950" /> Unicorn
                Backstory
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Fae Backstory
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Avian
                Backstory
              </li>
              <li className="flex gap-2 items-center  -ms-6">
                <ImCheckboxUnchecked className="text-amber-950" /> Dragon
                Backstory
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

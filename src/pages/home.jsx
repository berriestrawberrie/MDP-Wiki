import Layout from "../components/layout/simpleheader";
import SlideBreed from "../components/images/slidebreed";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Layout title={"Welcome!"}>
        <div>
          <p>
            My dream pony will be a browser based virtual pet site. You will be
            able to breed pony like pet creatures, train them, collect items,
            restock npc shops for currency, farming, cooking, creating custom
            items decorations for all your ponies. This game is currently in
            development and is not expected to be available to the public for
            some time. As I am the sole developer, artist, and marketing team
            😊. As this is a passion project I am steadily working to develop it
            and improve the coding, art and features.
          </p>
          <span className="text-6xl block text-center sm:text-left cherry-font text-sky-400">
            Breed Ponies!
          </span>
          <div className="w-full flex flex-col justify-between sm:flex-row mt-2">
            <p className="text-center sm:w-2/5 sm:text-left">
              This game is all about the ponies. They are the main pet
              characters and come in all shapes and sizes. The current pony
              types are listed below, however there will be more pony types to
              come in the future some ideas in the works currently are pony
              types that you can only get through breeding and seasonally.
              <Link to="/allponies">
                <button className="block mx-auto mt-2 rounded-xl px-4 py-2 border-b-4 border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 transition-all duration-200">
                  More About Ponies
                </button>
              </Link>
            </p>
            <SlideBreed
              title1={"Unicorns"}
              option1={"/pony/unifemale.png"}
              title2={"Dragons"}
              option2={"/pony/dragon2.png"}
              title3={"Avians"}
              option3={"/pony/avianconcept.png"}
              title4={"Kittling"}
              option4={"/pony/kittfemale.png"}
            />
          </div>
          <span className="text-6xl block text-center sm:text-right cherry-font text-sky-400">
            Playable Avatars!
          </span>
          <div className="w-full flex flex-col justify-between sm:flex-row mt-2">
            <SlideBreed
              title1={"Felkin Masculine"}
              option1={"/avatars/med-mfel.png"}
              title2={"Felkin Feminine"}
              option2={"/avatars/long-ffel.png"}
              title3={"Flora Masculine"}
              option3={"/avatars/short.png"}
              title4={"Flora Feminine"}
              option4={"/avatars/long-vf.png"}
            />
            <p className="text-center sm:w-2/5 sm:text-right">
              The playable characters in My Dream Pony are known as Adventurers.
              Adventurers are summoned to Geldingmire by the goddess Yemoa in an
              attempt to restore the power of the Luminara Crystal and bring
              about another age of peace and prosperity to her beloved realm.
              <h6>Felkin Bestial</h6>
              Cat like race of humanoids.The fur tuft worn on the Felkin native
              garbs is actually the fur of their revered ancestors.
              <h6>Flora Vampiric</h6>
              Long outward facing ears are the primary characteristic of the
              Flora Vampiric race. They sustain themselves on the life source of
              local flora, liquid chlorophyll of course.
              <h6>Fauna Vampiric</h6>
              Short up turned ears are the primary characteristic of the Fauna
              Vampiric race. They sustain themselves on the life source of local
              fauna creatures, blood of course.
              <h6>Human</h6>
              Humans are from a planet called Earth. They are mortal beings;
              they tend to be warmer and more welcoming than the other
              Adventurer species.
              <h6>Direborn Bestial</h6>
              Wolf like race of humanoids.
              <h6>Oceanic Elementals</h6>
              Aqautic People
              <h6>Equestiral Elementals:</h6>
              Centaur like humanoids.
              <Link to="/avatars">
                <button className="block mx-auto mt-2 rounded-xl px-4 py-2 border-b-4 border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 transition-all duration-200">
                  More About Avatars
                </button>
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;

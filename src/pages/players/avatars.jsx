import Layout from "../../components/layout/simpleheader";
import SlideAvatar from "../../components/images/slideavatar";
import { FaTools } from "react-icons/fa";
import { Link, Element } from "react-scroll";
import { IoCaretUp } from "react-icons/io5";

function Avatars() {
  return (
    <>
      <Layout title={"Player Avatars"}>
        <Link
          to="#top"
          className="fixed bottom-[10px] right-[10px] animate-bounce"
          smooth={true}
          duration={800}
        >
          <IoCaretUp className="text-xl text-sky-400" />
        </Link>
        <div>
          <Element name="#top">
            <div className=" flex flex-wrap justify-center gap-2">
              <Link
                to="#vampiric"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Vampiric
              </Link>
              <Link
                to="#bestial"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Bestial
              </Link>
              <Link
                to="#humans"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Humans
              </Link>
              <Link
                to="#elementals"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Elementals
              </Link>
            </div>
          </Element>
          <h3>Introduction</h3>
          <p>
            The playable characters in My Dream Pony are known as Adventurers.
            Adventurers are summoned to Geldingmire by the goddess Yemoa in an
            attempt to restore the power of the Luminara Crystal and bring about
            another age of peace and prosperity to her beloved realm.
          </p>
          <Element name="#vampiric">
            <h3>Vampiric Adventures</h3>
          </Element>
          <p>
            The Vampiric species are more slightly built than the other races.
            They have evolved to sustain themselves on fewer resources than any
            other race. They are immortal beings.
          </p>
          <h6>Flora Vampiric</h6>
          <p>
            The Flora Vampires of Geldingmire are easily recognized by their
            long, outward-facing ears—sensitive fronds attuned to the whispers
            of the forest. These enigmatic beings draw sustenance not from
            blood, but from the verdant lifeblood of the land itself: liquid
            chlorophyll, harvested in ritual communion. Yet unlike their distant
            kin, Flora Vampires must wholly consume their chosen flora to
            replenish their own essence. This consumption is never careless.
          </p>
          <p>
            Guided by ancient instinct and a deep reverence for balance, they
            seek only the sickly, the invasive, the flora that threatens
            harmony. In this way, they serve as quiet stewards of the wild,
            pruning corruption with grace. It is said that Geldingmire
            flourishes under their watchful hunger, its tangled groves thriving
            in the wake of their selective feast.
          </p>
          <div className="flex flex-wrap justify-evenly">
            <SlideAvatar
              option1={"/avatars/short.png"}
              title1={"Masculine Short"}
              option2={"/avatars/med.png"}
              title2={"Masculine Medium"}
              option3={"/avatars/long.png"}
              title3={"Masculine Long"}
            />
            <SlideAvatar
              option1={"/avatars/short-vf.png"}
              title1={"Feminine Short"}
              option2={"/avatars/med-vf.png"}
              title2={"Feminine Medium"}
              option3={"/avatars/long-vf.png"}
              title3={"Feminine Long"}
            />
          </div>
          <h6>Fauna Vampiric</h6>
          <p>
            The Fauna Vampires of Geldingmire are marked by their short,
            upturned ears—keen and twitching, ever attuned to the pulse of
            nearby life. These nocturnal beings feed not on flora, but on the
            warm essence of beasts: blood, drawn with reverence. Yet unlike the
            Flora, Fauna Vampires do not need to drain their victims completely
            to sustain their own life To do so would violate the ancient tenets
            of their kind, for in their culture, excess is a sin and restraint
            is sacred.
          </p>
          <p>
            They sip only what is needed, leaving their hosts weary but alive.
            This delicate balance has made them welcome stewards of
            Geldingmire's wilds, where predator and prey dance in quiet harmony.
            It is said that where Fauna Vampires dwell, the forests grow wiser,
            and the beasts more cunning.
          </p>
          <FaTools className="mx-auto text-7xl text-stone-200 mt-2" />
          <Element name="#bestial">
            <h3>Bestial</h3>
          </Element>
          The Bestial species have keens senses and reflexes. They excel at
          hunting gather and crafting. Both species tend to form strong communal
          bonds.
          <h6>Bestial Felkin</h6>
          <p>
            Among the Felkin tribes, the tuft of fur woven into ceremonial garb
            is no mere ornament it is the sacred remnant of a revered ancestor,
            passed down through generations like a whisper of lineage. Each
            strand carries the weight of memory, binding the wearer to the
            spirits of those who came before. In Felkin culture, kinship is not
            just honored it is lived, echoed in every gesture and garment.
            <p>
              {" "}
              Equally potent are the bells that chime from their robes. These
              are not trinkets, but tokens of triumph. To wear a bell is to
              declare a deed worthy of song; to wear three is to walk among
              legends. Yet only the ruling bloodlines may bear more than three
              in formal gatherings, their garments ringing with the quiet
              thunder of legacy and law.
            </p>
          </p>
          <div className="flex flex-wrap justify-evenly">
            <SlideAvatar
              option1={"/avatars/short-mfel.png"}
              title1={"Masculine Short"}
              option2={"/avatars/med-mfel.png"}
              title2={"Masculine Medium"}
              option3={"/avatars/lon-mfel.png"}
              title3={"Masculine Long"}
            />
            <SlideAvatar
              option1={"/avatars/shot-ffel.png"}
              title1={"Feminine Short"}
              option2={"/avatars/med-ffel.png"}
              title2={"Feminine Medium"}
              option3={"/avatars/long-ffel.png"}
              title3={"Feminine Long"}
            />
          </div>
          <h6>Bestial Direborn</h6>
          <p>Description coming soon..</p>
          <FaTools className="mx-auto text-7xl text-stone-200 mt-2" />
          <Element name="#humans">
            <h3>Humans</h3>
          </Element>
          <h6>Earthlings</h6>
          <p>Description coming soon..</p>
          <FaTools className="mx-auto text-7xl text-stone-200 mt-2" />
          <Element name="#elementals">
            <h3>Elementals</h3>
          </Element>
          <h6>Oceanic</h6>
          <p>Description coming soon..</p>
          <FaTools className="mx-auto text-7xl text-stone-200 mt-2" />
          <h6>Equestrial</h6>
          <p>Description coming soon..</p>
          <FaTools className="mx-auto text-7xl text-stone-200 mt-2" />
        </div>
      </Layout>
    </>
  );
}

export default Avatars;

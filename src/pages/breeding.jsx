import Layout from "../components/layout/simpleheader";
import { Link, Element } from "react-scroll";
import { IoCaretUp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function Breeding() {
  return (
    <>
      <Layout title={"Breeding"}>
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
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                to="#genetics"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Genetics
              </Link>
              <Link
                to="#stats"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Inherited Stats
              </Link>
              <Link
                to="#mixing"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Color Mixing
              </Link>
              <Link
                to="#dominance"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Dominance
              </Link>
            </div>
          </Element>
          <h3>Introduction</h3>
          <p>
            My Dream Pony will be a breeding game. You will need a male and
            female pony to produce an offspring. The color, traits, and baby
            stats will depend on both parents. You are free to breed any male or
            female pony together regardless of type or relationship. So, it is
            possible to breed a parent to an offspring, however the resulting
            offspring will then be marked as inbred currently this has no impact
            of the game. This section will go into more detail on all the
            mechanics I have in the works thus far for breeding 👍🏽
          </p>
          <div className="flex justify-around">
            <img src="/ui/breeding.png" />
          </div>
          <p>
            Once you have an adult male and adult female pony of any kind you
            can breed them together to create new baby ponies. The baby's sex
            has 50% chance of female or male. If the ponies are of the same type
            then the baby will be that type, but if the parents are different
            types currently there is 50% chance of being either type of adult.
            For example, if you breed a Dragon Pony to a Unicorn Pony you have
            equal chance of the baby being dragon or unicorn. Only the direct
            parent types are considered when determining the baby type. Next
            let's talk about what happens after you decide to breed ponies.
          </p>
          <h3>Hybrids</h3>
          <p>
            As of this update there are no hybrid pony types. However, in the
            future there will be hybrid pony types that can only be achieved
            through breeding. Here are some initial ideas:
          </p>
          <table>
            <tr className="tr-blue">
              <td>Sire x Dam</td>
              <td>Hybrid </td>
            </tr>
            <tr>
              <td>Unicorn x Dragon</td>
              <td>Kirin Pony</td>
            </tr>
            <tr>
              <td>Kittling x Avian</td>
              <td>Griffin Pony</td>
            </tr>
          </table>
          <Element name="#mixing">
            <h3>How Colors Mix?</h3>
          </Element>
          <p>
            The color mixing in My Dream Pony is based on calculations done
            using the RGB (Red|Green|Blue) color values of the pony colors. RGB
            color mixing is not exactly the same as what you might do with paint
            but the game tweaks it to somewhat follows the idea. Let's go over
            an example. Let's say you have the following parents:
          </p>
          <p className="text-center font-bold mt-2">
            {" "}
            Female: 255|000|000 x Male: 255|255|000
          </p>
          <div className="flex">
            <img className="w-1/2" src="/breeding/red.png" />
            <img className="w-1/2" src="/breeding/yellow.png" />
          </div>
          <p>
            Let's focus on how the hair colors combine, this method will be
            repeated for every color between the parents to create a new baby.
          </p>
          <h6>Step 1) Calculate a Random %</h6>
          <p>
            The game will generate a random percentage between 0-100%.For this
            example let's say we get <span className="accent">[ 36%.]</span>
          </p>
          <h6>Step 2) Maximum or Minimum for RGB</h6>
          <p>
            Next it will pick a starting value for each color slot R=red,
            G=green, B=blue. It will randomly select either maximum or minim
            value between the parents. It also find the number distance between
            the parents colors for each slot.
          </p>
          <table className="mx-auto table-auto">
            <tr className="tr-blue">
              <td>R=Red</td>
              <td>G=Green</td>
              <td>B=Blue</td>
            </tr>
            <tr>
              <td>
                Female: 255 <br></br> Male: 255
              </td>
              <td>
                Female: 000 <br></br> Male: 255
              </td>
              <td>
                Female: 000 <br></br> Male: 000
              </td>
            </tr>
            <tr>
              <td>Distance=0</td>
              <td>Distance=255</td>
              <td>Distance=0</td>
            </tr>
            <tr>
              <td>Max=255</td>
              <td>Min=000</td>
              <td>Max=000</td>
            </tr>
          </table>
          <p>
            In this example let's say the max and min rolls are Max for Red, Min
            for Green, and Max for blue. Then the baby's starting color will be
            :
          </p>
          <p className=" accent text-center">
            [ Starting Color: 255 | 000 | 000 ]
          </p>
          <p>
            If the maximum was chosen then the random % from step one is
            subtracted to the value. If the minimum was chosen then the random %
            is added to the value. What this does is provide a hue within the
            range of the parents let's contine the example:
          </p>
          <table className="mx-auto table-auto">
            <tr className="tr-blue">
              <td>If Maximum</td>
            </tr>
            <tr>
              <td>New Hue = Max - (Distance x Random %) </td>
            </tr>
            <tr className="tr-blue">
              <td>If Minimum</td>
            </tr>
            <tr>
              <td>New Hue = Max - (Distance x Random %) </td>
            </tr>
          </table>
          <p>
            Let's continue with the example and calculate the new R|G|B based on
            the min/max start and distance with values rounded to the nearest
            whole number.
          </p>
          <table className="mx-auto table-auto">
            <tr className="tr-blue">
              <td>Calculate</td>
              <td>Result</td>
            </tr>
            <tr>
              <td>New Red = 255 - (0 * 36%)</td>
              <td className="accent">255</td>
            </tr>
            <tr>
              <td>New Green = 0 + (255 * 36%)</td>
              <td className="accent">92</td>
            </tr>
            <tr>
              <td>New Blue = 0 - (0 * 36%)</td>
              <td className="accent">0</td>
            </tr>
          </table>
          <h6>Step 3) Final Random Shake +/- 15pts</h6>
          <p>
            Then for a final shake add a random value from [-15 , 15] inclusive
            to each new color value R,G,B. Where the value added is randomized
            each time. Applying this to our example we could have this as a
            possible outcome:
          </p>
          <table className="mx-auto table-auto">
            <tr className="tr-blue">
              <td>Calculate</td>
              <td>Result</td>
            </tr>
            <tr>
              <td>Shake Red = 255 - 10</td>
              <td className="accent">245</td>
            </tr>
            <tr>
              <td>Shake Green = 92 + 3</td>
              <td className="accent">95</td>
            </tr>
            <tr>
              <td>Shake Blue = 0 - 12</td>
              <td className="accent">-12</td>
            </tr>
          </table>
          <h6>Step 4) Check the Range </h6>
          <p>
            Finally the game verifies that each color value is within range of
            the parents. This means that no value can be lower than the lowest
            parent in that color slot, and no value can be higher than the
            maximum value in that color slot. This ensures that the baby is a
            valid color and makes color sense with the parent. Let's apply this
            logic to get the final baby color.
          </p>
          <table className="mx-auto table-auto">
            <tr className="tr-blue">
              <td>Color</td>
              <td>Min</td>
              <td>Max</td>
              <td>Result</td>
            </tr>
            <tr>
              <td>Red</td>
              <td>255</td>
              <td>255</td>
              <td>245</td>
            </tr>
            <tr>
              <td>Green</td>
              <td>0</td>
              <td>255</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Blue</td>
              <td>0</td>
              <td>0</td>
              <td className="text-red-500">-12</td>
            </tr>
            <tr>
              <td colSpan={4} className="accent">
                R=245 | G=95 | B=0
              </td>
            </tr>
          </table>
          <p>
            In this final step we compare the results from Step 3. If the result
            is lower than the minimum value it is replaced with the minimum
            value. If the result is higher than the maximum value than it is
            replaced with the maximum value. This ensures the baby pony is
            similar and color and a valid color. We can see this demonstrated in
            our example, B = -12 is less than the minimum 0 so that slot is
            changed in the baby. And the resulting baby's hair will be
          </p>
          <p className="text-center">Baby = 245|095|000</p>
          <img src="/breeding/breed-ex.png" className="w-1/2 mx-auto" />
          <p>
            This method is repeated for each pony's hex whenever they are bred.
            To create a new baby pony
          </p>
          <Element name="#stats">
            <h3 id="stats">Inherited Stats</h3>
          </Element>
          <p>
            When two ponies are bred, their offspring doesn't just inherit their
            appearance and traits it also inherits a portion of their stats. The
            baby's attributes are calculated by taking the average of the
            parents' stat points to determine the final outcome.
          </p>
          <p>
            This is how each pony stat will be calculated, strength, charisma
            and intelligence. So breeding two high level ponies will give the
            baby a head start, but also make it harder to level the baby. Since
            the higher your level the more experience required to reach the next
            level.
          </p>
          <Element name="#genetics">
            <h3>Trait Genetics</h3>
          </Element>
          <p>There are four possible special trait slots:</p>
          <ul className="ms-4">
            <li>(Top) Face</li>
            <li>Leg</li>
            <li>Body</li>
            <li>(Bottom) Hair</li>
          </ul>
          <p>
            The order show is the how the layers will appear on the pony. Face
            traits being layered on top, then leg traits and body traits and so
            on. Each pony can show one trait in each slot and they can also
            carry one additional trait in each slot. So at maximum a pony can
            show (4) traits and carry (4) traits.
          </p>
          <p>
            Special traits also have dominance, which is a hierarchy that
            determines which trait will be shown when parents are breeding. The
            newest traits will have the lowest dominance for breeding. This
            means that when breeding ponies the dominant gene will be usually
            shown unless carried genes are a factor.Let's talk about how the
            breeding and trait combination actually works.
          </p>
          <p>
            Each slot is calculated separate based on parents' traits. Here is
            the current logic.
          </p>
          <Element name="#dominance">
            <h3>Dominance</h3>
          </Element>
          The current order for trait dominance separated by special trait slot
          left(most dominant) to right(least dominant):
          <h6>Face Traits</h6>
          <div className="flex flex-wrap gap-2 items-center">
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/faceblaze.png"
              title="Face Blaze"
            />
            <IoIosArrowForward />
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/facefade.png"
              title="Face Fade"
            />
            <IoIosArrowForward />
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/vulpine.png"
              title="Face Vulpine (Uncolored)"
            />
          </div>
          <h6>Leg Traits</h6>
          <div className="flex gap-2 items-center">
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/stocking-icon.png"
              alt="Stocking"
              title="Stocking (Uncolored)"
            />
          </div>
          <h6>Body Traits</h6>
          <div className="flex gap-2 items-center">
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/paint-icon.png"
              alt="Paint"
              title="Paint (Uncolored)"
            />
            <IoIosArrowForward />
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/belly-icon.png"
              alt="Belly"
              title="Belly"
            />
            <IoIosArrowForward />
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/underbelly-icon.png"
              alt="Under Belly"
              title="Under Belly"
            />
          </div>
          <h6>Hair Traits</h6>
          <div className="flex gap-2 items-center">
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/streak.png"
              alt="Streak"
              title="Streak"
            />
            <IoIosArrowForward />
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/rainbow.png"
              alt="Rainbow"
              title="Rainbow (Uncolored)"
            />
            <IoIosArrowForward />
            <img
              className="w-24 sm:w-32"
              src="/breeding/traits/hairfade.png"
              alt="Hair Fade"
              title="Hair Fade"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Breeding;

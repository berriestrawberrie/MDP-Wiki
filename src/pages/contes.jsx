import Layout from "../components/layout/simpleheader";
import { Link, Element } from "react-scroll";
import { IoCaretUp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

function Contest() {
  return (
    <>
      <Layout title={"Pony Competition"}>
        <Link
          to="#top"
          className="fixed bottom-[10px] right-[10px] animate-bounce"
          smooth={true}
          duration={800}
        >
          <IoCaretUp className="text-xl text-sky-400" />
        </Link>
        <div>
          <img className="mx-auto" src="contests/trophy.png" />
          <Element name="#top">
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                to="#experience"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Experience
              </Link>
              <Link
                to="#types"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Competition Types
              </Link>
              <Link
                to="#cost"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Competition Cost
              </Link>
              <Link
                to="#items"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Ponyware
              </Link>
            </div>
          </Element>
          <h3>Introduction</h3>
          <p>
            Players will be able to run their own pony competitions. Competing
            is how your pony earns experience. As your pony gains experience, it
            levels up and gains points to add to its attributes
            (strength,charisma,or intelligence). Players can host and enter
            their ponies in competitions every hour. After the competition runs
            the game will then determine the winner and give exp points to all
            the participating ponies based on their performance.
          </p>
          <Element name="#types">
            <h3>Competition Types</h3>
          </Element>
          <p>
            Pony competitions are often divided into categories that highlight
            different traits: beauty, strength, and intelligence. Pony Pagents
            events, evaluate ponies on physical elegance and presentation. Pony
            Pulling contests, test their power and endurance under load.
            Intelligence competitions showcase cognitive skills through trail
            classes and liberty works. The higher your pony's skill in the right
            attribute the better your pony will perform in the competition.
          </p>
          <table>
            <tr className="tr-blue">
              <td colSpan={2}>Pony Competitions</td>
            </tr>
            <tr>
              <td className="">
                <FaTools className="text-stone-200 text-4xl" />
              </td>
              <td className="flex flex-col items-center">
                <span className="font-bold text-lg">Pony Pagents</span>
                <p>
                  Charisma takes center stage as contestants dazzle with
                  expressive eyes, playful struts, and magnetic presence.
                </p>
              </td>
            </tr>
            <tr>
              <td className="">
                <FaTools className="text-stone-200 text-4xl" />
              </td>
              <td className="flex flex-col items-center">
                <span className="font-bold text-lg">Pony Puzzles</span>
                <p>
                  Ponies show off their intelligence as bright-eyed minds tackle
                  puzzles with focus and flair.
                </p>
              </td>
            </tr>
            <tr>
              <td className="">
                <FaTools className="text-stone-200 text-4xl" />
              </td>
              <td className="flex flex-col items-center">
                <span className="font-bold text-lg">Pony Pulling</span>
                <p>
                  Ponies show off their strength as stout-hearted ponies dig in
                  and haul with unwavering determination.
                </p>
              </td>
            </tr>
          </table>
          <Element name="#cost">
            <h3>Competition Costs</h3>
          </Element>
          <p>
            It costs pony gold to host a competition the more ponies you
            competition can host the more expensive your competition will be to
            run. However, large comeptitions will also award more experience to
            the the entrants and winners.
          </p>
          <table>
            <tr className="tr-blue">
              <td>Contest</td>
              <td># of Slots</td>
              <td>Cost/(per Pony)</td>
              <td>Unlock</td>
            </tr>
            <tr>
              <td rowSpan={4}>Adults</td>
              <td>20</td>
              <td>500PG / (25PG)</td>
              <td> --</td>
            </tr>
            <tr>
              <td>40</td>
              <td>800PG / (20PG)</td>
              <td>Lvl 10</td>
            </tr>
            <tr>
              <td>80</td>
              <td>1,200PG / (15PG)</td>
              <td>Lvl 30</td>
            </tr>
            <tr>
              <td>120</td>
              <td>1,500PG / (12.5PG)</td>
              <td>Master Trainer</td>
            </tr>
            <tr>
              <td rowSpan={3}>Babies</td>
              <td>20</td>
              <td>400PG / (20PG)</td>
              <td>--</td>
            </tr>
            <tr>
              <td>40</td>
              <td>600PG / (15PG)</td>
              <td>Lvl 10</td>
            </tr>
            <tr>
              <td>100</td>
              <td>1,000PG / (10PG)</td>
              <td>Lvl 30</td>
            </tr>
          </table>
          <Element name="#experience">
            <h3>Competition Exp</h3>
          </Element>
          <p>
            Each time your pony enters a competition it will earn experience
            based on the following calculation:
          </p>
          <table>
            <tr className="tr-blue">
              <td>Experience Calcuation</td>
            </tr>
            <tr>
              <td>
                EXP = BaseXP x (ContestCapcity + Traitbonus) x PlacementBonus
              </td>
            </tr>
          </table>
          <ul>
            <li>
              <span className="font-bold">BaseXP = </span>
              10 x (Pony's Current level)
            </li>
            <li>
              <span className="font-bold">Contest Capacity = </span>
              Arena Size / 120
            </li>
            <li>
              <span className="font-bold">Trait Bonus = </span>
              Contest Stat Point / All Stat Points
            </li>
            <li>
              <span className="font-bold">Placement Bonus =</span>
              Modifier for how the pony is placed. 1st place (1.5), 2nd place
              (1.3), 3rd place (1.2), all other participants (1).
            </li>
          </ul>
          <h6>Example: Choco Lvl 55</h6>
          <div className="flex flex-col items-center justify-evenly sm:flex-row">
            <img className="w-4/5" src="/contests/choco.png" />
            <div className="border rounded-lg p-2 flex flex-row gap-2 sm:flex-col">
              <p className="text-center">
                Charisma:<br></br> 30
              </p>
              <p className="text-center">
                Strength:<br></br> 15
              </p>
              <p className="text-center">
                Intelligence:<br></br> 10
              </p>
            </div>
          </div>
          <p>
            Choco has been entered into a Pony Pagent(Beauty Stat) and placed
            1st in a contest with 80 slots her earned exp would then be:
          </p>
          <table>
            <tr className="tr-blue">
              <td>Earned Experience</td>
            </tr>
            <tr>
              <td>990EXP = (550) x (.66 + .54) x 1.5</td>
            </tr>
          </table>
          <ul>
            <li>
              <span className="font-bold">BaseXP = </span>
              10 x (55) = 550
            </li>
            <li>
              <span className="font-bold">Contest Capacity = </span>
              80 / 120 = .66
            </li>
            <li>
              <span className="font-bold">Trait Bonus = </span>
              30/55 = .54
            </li>
            <li>
              <span className="font-bold">Placement Bonus =</span>
              1.5
            </li>
          </ul>
          <Element name="#items">
            <h3>Competition Items</h3>
          </Element>
          <p>
            Ponies will be able to equip items and ponyware to boost their stats
            in competitions. More to ocme on this later 💖{" "}
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Contest;

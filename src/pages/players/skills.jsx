import Layout from "../../components/layout/simpleheader";
import { IoCaretUp } from "react-icons/io5";
import { Link, Element } from "react-scroll";

function PlayerSkills() {
  return (
    <>
      <Layout title={"Player Skills"}>
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
                to="#unique"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Unique Skills
              </Link>
              <Link
                to="#mastery"
                className="quicklink"
                smooth={true}
                duration={800}
              >
                #Mastery
              </Link>
            </div>
          </Element>
          <h3>Introduction</h3>
          <p className="mb-2">
            Adventurers can earn experience just like their ponies but with a
            key difference: adventurers do not gain stat points. Instead, they
            progress by leveling up and earning skill points. Adventurers can
            reach a maximum level of 30.{" "}
          </p>
          <table>
            <tr className="tr-blue">
              <td>Max Adventurer Level</td>
            </tr>
            <tr>
              <td>30</td>
            </tr>
          </table>
          <h3>Levling Up</h3>
          <p>Experience is earned through various site activities, such as:</p>
          <ul className="heartlist">
            <li>Harvesting Crops</li>
            <li>Completing Quests</li>
            <li>Advancing the main story</li>
            <li>More to come..</li>
          </ul>
          <p>
            For every 3 levels gained, the adventurer earns 1 skill point.Skill
            points can be spent to unlock new unique skills that can enhance
            your game play. At max adventurer level you'll have 10 skill points
            you can use.
          </p>
          <table>
            <tr className="tr-blue">
              <td>Total Skill Points</td>
            </tr>
            <tr>
              <td>10</td>
            </tr>
          </table>
          <Element name="#unique">
            <h3>Unique Skills</h3>
          </Element>
          <p className="mb-2">
            Players unlock new skills at levels 10, 20, and 30, choosing one
            skill each time to customize their gameplay. They can freely mix and
            match skills to suit their goals, but are limited to a total of
            three unique skills. This flexible system encourages strategic
            combinations while maintaining a balance on overall skill diversity.
            Below is a list of current unique skill ideas organized by class:
          </p>
          <ul>
            <li>
              <span className="font-bold">Skill Class:</span> A category that
              groups similar types of abilities based on their benefit.
            </li>
            <li>
              <span className="font-bold">Unique Skill:</span> The benefit
              provided when unlocking this ability.
            </li>
            <li>
              <span className="font-bold">Skill Type:</span> Passive Skills are
              always "on." They provide continuous benefits without needing to
              be triggered. Active Skills require player input to use.
            </li>
            <li>
              <span className="font-bold">Coold Down:</span> A cooldown is the
              waiting period after using an ability or skill before it can be
              used again. Only applicable to active skills.
            </li>
          </ul>
          <table className="table-auto text-sm">
            <tr className="tr-blue">
              <td>Skill Class</td>
              <td>Unique Skills</td>
              <td>Skill Type</td>
              <td>Cool Down</td>
            </tr>
            <tr>
              <td rowSpan={2}>
                Chef{" "}
                <img
                  title="Chef"
                  className="w-24"
                  src="/playerSkill/skill-icon-chef.png"
                />{" "}
              </td>
              <td>Increase success rate with cooking</td>
              <td>Passive</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Increase food effect on ponies</td>
              <td>Passive</td>
              <td>--</td>
            </tr>
            <tr>
              <td rowSpan={2}>
                Trainer{" "}
                <img
                  title="Trainer"
                  className="w-24"
                  src="/playerSkill/skill-icon-trainer.png"
                />{" "}
              </td>
              <td>Increase pony exp gained</td>
              <td>Passive</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Reduce health lost from contests</td>
              <td>Passive</td>
              <td>--</td>
            </tr>
            <tr>
              <td rowSpan={2}>
                Gambler{" "}
                <img
                  title="Gambler"
                  className="w-24"
                  src="/playerSkill/skill-icon-trainer.png"
                />{" "}
              </td>
              <td>Increase luck for high rolls</td>
              <td>Active</td>
              <td>2hrs</td>
            </tr>
            <tr>
              <td>Increase luck for high rolls</td>
              <td>Active</td>
              <td>2hrs</td>
            </tr>
            <tr>
              <td rowSpan={2}>
                Healer{" "}
                <img
                  title="Healer"
                  className="w-24"
                  src="/playerSkill/skill-icon-healer.png"
                />{" "}
              </td>
              <td>Resurrect a pony</td>
              <td>Active</td>
              <td>24hrs</td>
            </tr>
            <tr>
              <td>Heal ponies without items</td>
              <td>Active</td>
              <td>1hr</td>
            </tr>
            <tr>
              <td rowSpan={2}>
                Breeder{" "}
                <img
                  title="Breeder"
                  className="w-24"
                  src="/playerSkill/skill-icon-breeder.png"
                />{" "}
              </td>
              <td>Increased twin chance</td>
              <td>Passive</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Smaller random margins breeding</td>
              <td>passive</td>
              <td>--</td>
            </tr>
            <tr>
              <td rowSpan={2}>
                Merchant{" "}
                <img
                  title="Merchant"
                  className="w-24"
                  src="/playerSkill/skill-icon-merchant.png"
                />{" "}
              </td>
              <td>Lower prices from regular NPC</td>
              <td>Passive</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Increase success for NPC socializing</td>
              <td>passive</td>
              <td>--</td>
            </tr>
          </table>
          <p>
            When you reach max level 30 as an adventurer you can unlock a
            special mastery skill.
          </p>
          <Element name="#mastery">
            <h3>Mastery</h3>
          </Element>
          <p className="mb-2">
            When a player reaches level 30, their adventurer's mastery is
            determined by whichever skill or skills they've leveled up the most.
            However, you will need to allocate all 10 of your skill points to
            obtain a mastery skill. In other words, the highest-level skill(s)
            you've invested in will define your adventurer's specialization or
            dominant role in the game world. This encourages players to focus
            and refine their skill choices as they progress.
          </p>
          <p>
            With that in mind your entire skill tree will be changeable at any
            point using an item that users can earn or buy using the game's
            currency. This allows you to explore different paths or rework how
            you play the game, however there will be a time restriction or
            cooldown on skill tree changes. To prevent abuse of the system.
          </p>
          <table>
            <tr className="tr-blue">
              <td>Skill Class</td>
              <td>Mastery Skill</td>
            </tr>
            <tr>
              <td>
                <img
                  title="Chef"
                  className="w-24"
                  src="/playerSkill/skill-icon-chef.png"
                />
              </td>
              <td>Ability to create high quality foods</td>
            </tr>
            <tr>
              <td>
                <img
                  title="Chef"
                  className="w-24"
                  src="/playerSkill/skill-icon-trainer.png"
                />
              </td>
              <td>Additional 30 contesting slots for your competitions</td>
            </tr>
            <tr>
              <td>
                <img
                  title="Chef"
                  className="w-24"
                  src="/playerSkill/skill-icon-gambler.png"
                />
              </td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>
                <img
                  title="Chef"
                  className="w-24"
                  src="/playerSkill/skill-icon-healer.png"
                />
              </td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>
                <img
                  title="Chef"
                  className="w-24"
                  src="/playerSkill/skill-icon-breeder.png"
                />
              </td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>
                <img
                  title="Chef"
                  className="w-24"
                  src="/playerSkill/skill-icon-merchant.png"
                />
              </td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Jack of All</td>
              <td>TBD</td>
            </tr>
          </table>
          <p>
            I want mastery skills to give users something unique that only the
            masters of that skill can achieve, but I don't want it to be
            something that makes the game unbalanced. So these are just some
            ideas that are likely to change with testing and even after release
            may require more tweaking.
          </p>
          <h6>Example: Highest Skill Allocation</h6>
          In this example an adventurer has reached max level 30 and earned 10
          skill points. They assigned 5pts to Merchant Class, 3pts to Chef
          Class, and 2pts to the Breeder Class.
          <img className="mx-auto w-[200px]" src="/playerSkill/example.png" />
          <p>
            The highest skill class here is merchant so this adventurer can
            obtain the Merchant Master Skill.{" "}
          </p>
        </div>
      </Layout>
    </>
  );
}

export default PlayerSkills;

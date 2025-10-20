import Layout from "../../components/layout/simpleheader";
import { FaGift } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { BsChatHeartFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { TiHeartFullOutline } from "react-icons/ti";

function Social() {
  return (
    <>
      <Layout title={"Socializing"}>
        <div>
          <h3>Introduction</h3>
          <p>
            NPC Socializing will be a time restricted activity. That means that
            there will be no way for a player to completely maximize an NPC in a
            short time period. You can think of socializing NPCs like leveling
            with your pony. You will start at a base 0 points and gain points
            with each positive interaction with the NPC. You can never lose your
            gained points even if you stop interacting with the NPC or you do
            something the NPC doesn't like. Each NPC will have their own
            preference for interaction but they all fall into the following
            categories:{" "}
          </p>
          <table>
            <tr className="tr-blue">
              <td>Category</td>
              <td>Description</td>
            </tr>
            <tr>
              <td className="tr-blue">
                <FaGift className="mx-auto text-4xl" />
              </td>
              <td>Gift giving, the adventurer donates item to NPC</td>
            </tr>
            <tr>
              <td className="tr-blue">
                <BsPatchQuestionFill className="mx-auto text-4xl" />
              </td>
              <td>Quest completion, the adventurer completes in-game task</td>
            </tr>
            <tr>
              <td className="tr-blue">
                <BsChatHeartFill className="mx-auto text-4xl" />
              </td>
              <td>Chatting, the adventurer chats with NPC (method TBD)</td>
            </tr>
            <tr>
              <td className="tr-blue">
                <FaTrophy className="mx-auto text-4xl" />
              </td>
              <td>
                In-game achievements required to unlock additional social levels
              </td>
            </tr>
          </table>
          <p>
            The more you an NPC likes you the more benefits they'll give you in
            game like store discounts, special items, and access to extra
            content.{" "}
          </p>
          <h3>Social Levels</h3>
          <p>
            The following provides the points required to reach each social
            rank, please note not all NPCs have a heartfelt rank. The ranks will
            provide different benefits for each NPC, but when you rank up you
            retain all the benefits from a lower rank. What is provided at each
            rank will be available information for the player.
          </p>
          <table>
            <tr>
              <td className="tr-blue">Stranger</td>
              <td>0pts</td>
            </tr>
            <tr>
              <td className="tr-blue flex flex-col items-center">
                Acquiantance
                <div className="flex items-center">
                  <TiHeartFullOutline className="text-lg  " />
                </div>
              </td>
              <td>25pts</td>
            </tr>
            <tr>
              <td className="tr-blue flex flex-col items-center">
                Friend
                <div className="flex items-center">
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                </div>
              </td>
              <td>50pts</td>
            </tr>
            <tr>
              <td className="tr-blue flex flex-col items-center">
                Kindred
                <div className="flex items-center">
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                </div>
              </td>
              <td>100pts</td>
            </tr>
            <tr>
              <td className="tr-blue flex flex-col items-center">
                Heartfelt (Optional)
                <div className="flex items-center">
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                  <TiHeartFullOutline className="text-lg  " />
                </div>
              </td>
              <td>200pts</td>
            </tr>
          </table>
          <p>
            When you have a positive interaction with an NPC you will receive
            pts randomly from (3-5)pts. Then there will be a real time cool down
            before you can interact with the NPC again. This will vary from NPC
            to NPC but will range from 1 day to 1 week.{" "}
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Social;

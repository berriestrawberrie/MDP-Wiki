import Layout from "../../components/layout/simpleheader";

function Commun() {
  return (
    <>
      <Layout title={"Communication"}>
        <div>
          <img className="w-24 mx-auto" src="/social/mail.png" />
          <h3>Introduction</h3>
          <p>
            In My Dream Pony, the magic goes beyond breeding, contesting, and
            questing—there's a warm and welcoming community waiting to be
            discovered. There will be more to share on these features when they
            are more fully developed but here is a list of the main ideas for
            player communications:
          </p>
          <ul>
            <li>Pony Mail:You can send direct mail messages to other users</li>
            <li>
              Public Forums: Public spaces for players to gather around shared
              interests and chat with each other
            </li>
            <li>
              **Pony Clubs(TBD): Private places where users can get together and
              discuss shared interests
            </li>
          </ul>
          <p>
            Whether you're trading grooming secrets or joining a lore
            discussion, I just want everyone to remember there's always a place
            for everyone in the herd.
          </p>
          <h3>Community Guidlines</h3>
          <p>
            To help make sure everyone is being respectful there will be a set
            of rules you must abide by to participate in the game. This will
            apply to users and future staff. Everyone will need to be
            accountable for making this a fun and welcoming place to be.
            Currently still building the game so these will come at a later
            date.
          </p>
          <h3>Reporting Abusive Actions & Behavior</h3>
          <p>
            In My Dream Pony, I know I won't always be able to oversee
            everything myself, which is why moderators and helpers will be part
            of the team to keep things running smoothly. But just as players are
            expected to follow the rules, staff will be held to the same
            standards no one is above accountability. As a minority woman, I
            understand firsthand how painful it is to be dismissed when those in
            power act unfairly. That's why I'm committed to building systems
            that ensure fairness and transparency for everyone. If players
            encounter behavior or content that feels inappropriate, they'll be
            able to report it through a clear and accessible ticketing system.
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Commun;

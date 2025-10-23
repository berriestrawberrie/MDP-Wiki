import Layout from "../../components/layout/simpleheader";
import Cards from "../../components/npc/cards";
import cardsData from "../../../public/data/npclist.json";

function Characters() {
  return (
    <>
      <Layout title={"Characters"}>
        <div className="mb-4 flex gap-6 sm:gap-3">
          {cardsData.map((card, index) => (
            <Cards
              key={index}
              name={card.name}
              desc={card.desc}
              smallImg={card.smallImg}
              image={card.image}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Characters;

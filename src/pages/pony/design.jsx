import Layout from "../../components/layout/simpleheader";

function PonyDesign() {
  return (
    <>
      <Layout title={"Design Ponies"}>
        <div>
          <h3>Introduction</h3>
          <p>
            Ponies will come with (6) different options for coloring. Hair, Hair
            2, Accent, Accent 2, Eyes, and Coat as shown on the unicorn diagram
            below
          </p>
          <img className="mx-auto" src="/design/male-colors.png" />
          <p>
            Every pony type will have these colors generally defined as follows:
          </p>
          <table>
            <tr>
              <td>Hair</td>
              <td>
                The Base hair coloring for the pony including mane and tail.
              </td>
            </tr>
            <tr>
              <td>Hair 2</td>
              <td>
                The accent coloring or secondary coloring of the pony's hair
                trait.
              </td>
            </tr>
            <tr>
              <td>Accent</td>
              <td>
                Accent coloring a base feature of the pony.(e.g. horns,scales,
                etc..)
              </td>
            </tr>
            <tr>
              <td>Accent 2</td>
              <td>
                The secondary accent is used to color leg and body special
                traits. As well as a secondary feature of the pony (e.g. hooves,
                paws, etc..)
              </td>
            </tr>
            <tr>
              <td>Coat</td>
              <td>The base body coloring of the pony.</td>
            </tr>
            <tr>
              <td>Eyes</td>
              <td>Iris coloring of the pony.</td>
            </tr>
          </table>
          <h3>Generating</h3>
          <p>
            When planning a new pony or starting a breeding project, keep in
            mind that you won’t be able to choose an exact hex code for your
            pony. Both breeding and creating Generation 1 (G1) ponies involve a
            degree of randomness, which makes producing a specific result more
            challenging. Generating a pony means starting a brand-new bloodline
            with no existing lineage. In the game, you can create a new G1 pony
            using the Pony Generator.
          </p>
          <img src="/design/gen.png" />
          <p>
            In the Pony Generator, you can choose the pony type, preferred
            colors, and sex. You'll also select one visible trait for both the
            sire and dam. This means the generated pony can either display one
            trait or carry up to two. The game will then randomize the pony's
            colors based on your input sometimes they'll match closely, other
            times they'll be heavily tinted depending on your luck. For example,
            I tried generating four black female unicorns, and here were my
            first results.
          </p>
          <div className="flex flex-wrap">
            <img className="w-1/2 " src="/design/334.png" />
            <img className="w-1/2 " src="/design/335.png" />
            <img className="w-1/2 " src="/design/337.png" />
            <img className="w-1/2 " src="/design/338.png" />
          </div>
          <p>
            Once you have an adult male and female pony—regardless of type—you
            can breed them to produce a baby pony. The baby's sex is randomly
            determined, with a 50% chance of being male or female. If both
            parents are the same type, the baby will inherit that type. If the
            parents are different types, the baby has an equal 50% chance of
            being either one. For example, breeding a Dragon Pony with a Unicorn
            Pony gives you a 50/50 chance of the baby being a dragon or a
            unicorn. Only the direct parent types influence the baby's outcome.
            Now, let's explore what happens after you initiate the breeding
            process.
          </p>
          <img className="mx-auto" src="/design/lines.png" />
          <p>
            If your interested to see how the colors look on all the ponies try
            the Pony Designer. It is still in development but you can test out
            color combinations with all the pony types.{" "}
          </p>
          <a href="https://my-dream-pony-generator.netlify.app/" target="blank">
            <button className="my-2 cursor-pointer block mx-auto rounded-xl px-4 py-2 border-b-4 border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 transition-all duration-200">
              Pony Designer
            </button>
          </a>
          <img src="/design/ponygen.png" />
        </div>
      </Layout>
    </>
  );
}

export default PonyDesign;

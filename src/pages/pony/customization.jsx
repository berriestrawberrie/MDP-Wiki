import Layout from "../../components/layout/simpleheader";
import SlideBreed from "../../components/images/slidebreed";

function PonyCustom() {
  return (
    <>
      <Layout title={"Pony Stickers"}>
        <div>
          <img className="w-32 mx-auto" src="stickers/apple.png" />
          <h3>Introduction</h3>
          <p>
            ✨ Pony Stickers are inspired by My Little Pony cutie marks—but with
            a twist! These stylish decals are fully removable and customizable,
            letting you switch up your pony’s look whenever you like. In-game,
            Pony Stickers function just like wearable items: you can equip them
            to your pony or unequip them at any time. With a wide variety of
            sticker types available, you’ll be able to collect them through
            quests, purchase them from NPC shops, or even design your own unique
            creations!
          </p>
          <img className="mx-auto" src="stickers/apple-example.png" />
          <h3>Custom Stickers!?</h3>
          <p>
            🎨 Yes! I want every player to have the freedom to give their pony
            any kind of marking they like. Since I can’t create a unique sticker
            for everyone, you’ll be able to design your own! Custom stickers
            will also offer a fun way customize your pony and/or earn in-game
            currency—by selling your creations to other players through your
            personal sticker shop. You’ll be able to design stickers, submit
            them for review, and once approved, they’ll become official sticker
            items that you can sell directly in your shop.
          </p>
          <p>
            But, if you don't want to sell your designs and just want to make
            something special for your pony. That will not require a review. You
            will be able to upload art directly to your pony from it's profile
            page. This also means artists can sell their services privately
            without having to create a custom sticker item. We will just ask
            that your art follows the same community guidelines.
          </p>
          <h3>Placement</h3>
          <p>
            The sticker size will be 75 x 75 pixels and placed on each pony type
            differently, since they all have different lineart. Here are the
            inital ideas for the sticker placement for each breed. This feature
            is still in development and subject to change.
          </p>
          <SlideBreed
            option1={"stickers/uni.png"}
            title1={"Unicorn"}
            option2={"stickers/dragon.png"}
            title2={"Dragon"}
            option3={"stickers/avian.png"}
            title3={"Avian"}
            option4={"stickers/kittling.png"}
            title4={"Kittling"}
          />
          <h3>Guidelines</h3>
          <p>
            I haven’t come up with the final list of guidelines for custom
            stickers but here is an idea of some of the requirements :{" "}
          </p>

          <ul>
            <h6>1. Be Original</h6>
            <li>
              Only submit designs you’ve created yourself or have permission to
              use for custom stickers
            </li>
            <li>
              Avoid copying or tracing existing art, logos, or copyrighted
              content or stickers that already exist in the game.
            </li>
          </ul>

          <ul>
            <h6>2. Keep It Pony-Friendly</h6>
            <li>Designs should be PG-13</li>
            <li>No overly graphic, violent, or offensive imagery.</li>
          </ul>

          <ul>
            <h6>3. Respect the Community</h6>
            <li>No hate symbols, discriminatory content.</li>
            <li>
              Avoid designs that target or mock specific groups or individuals.
            </li>
          </ul>

          <ul>
            <h6>4. Format Requirements</h6>
            <li>Submit designs in the required file format (TBD)</li>
            <li>
              Stickers must fit within the designated canvas size otherwise they
              will be cropped
            </li>
          </ul>

          <ul>
            <h6>5. Review & Approval</h6>
            <li>All submissions will go through a review process.</li>
            <li>
              Approved stickers become official in-game items and can be sold in
              your shop.
            </li>
            <li>
              You’ll be notified if your design is accepted or needs changes.
            </li>
          </ul>

          <ul>
            <h6>6. Selling & Earnings</h6>
            <li>
              Once approved, your sticker can be listed in your custom sticker
              shop.
            </li>
            <li>
              You’ll earn in-game currency when other players purchase your
              design.
            </li>
          </ul>

          <ul>
            <h6>7. Updates & Appeals</h6>
            <li>
              If your sticker is rejected, you can revise and resubmit, but
              there will always be feedback on what it needs to be approved.
            </li>
            <li>
              We will try to be as clear as possible where there may be an
              issue.
            </li>
            <li>
              Custom stickers will not be rejected for how well they are drawn;
              we accept all skill levels.
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}

export default PonyCustom;

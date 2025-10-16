import Layout from "../../components/layout/simpleheader";
import Slideshow from "../../components/images/slideshow";
function AllPony() {
  return (
    <>
      <Layout title={"Pony Types"}>
        <div>
          There are lots of different types of ponies in My Dream Pony. These
          are all the current breeds available, but there will be more types to
          come. Including hybrid ponies and seasonal types that are only
          available at certain times of the year. Female and male baby ponies
          look the same. It will take a pony (14)
          {/*UNICORNS */}
          <div className="flex flex-col flex-col-reverse items-center sm:flex-row justify-center gap-4 mt-4">
            <Slideshow
              female={"/pony/unifemale.png"}
              male={"/pony/male-uni.png"}
              baby={"/pony/baby-uni.png"}
            />
            <div className="flex flex-col items-center  sm:w-1/4">
              <h4>Unicorns</h4>
              <p>
                Pony with lion-like tail and encrusted with crystal shards. The
                largest crystal protruding from their head.!
              </p>
            </div>
          </div>
          {/*DRAGONS */}
          <div className="flex flex-col flex-col-reverse items-center sm:flex-row justify-center gap-4 mt-4">
            <Slideshow
              female={"/pony/dragon2.png"}
              male={"/pony/Male-Dragon.png"}
              baby={"/pony/baby-dragons1.png"}
            />
            <div className="flex flex-col items-center  sm:w-1/4">
              <h4>Dragons</h4>
              <p>
                Pony with dragon scale mane down it's back. Shorter fur covered
                ears long finned tail and double horns. This pony is adapted to
                aquatic life and navigating rocky or sandy riverbeds and ocean
                floors. Their hooves have webbing and rounded claws.
              </p>
            </div>
          </div>
          {/*AVIANS */}
          <div className="flex flex-col flex-col-reverse items-center sm:flex-row justify-center gap-4 mt-4">
            <Slideshow
              female={"/pony/avianconcept.png"}
              male={"/pony/male-avian.png"}
              baby={"/pony/baby-avi.png"}
            />
            <div className="flex flex-col items-center  sm:w-1/4">
              <h4>Avians</h4>
              <p>
                Winged Pony with flowing airy mane and tail. Ankle wings make
                this pony particularly nimble in flight.
              </p>
            </div>
          </div>
          {/*KITTLINGS */}
          <div className="flex flex-col flex-col-reverse items-center sm:flex-row justify-center gap-4 mt-4">
            <Slideshow
              female={"/pony/kittfemale.png"}
              male={"/pony/kitt-male.png"}
              baby={"/pony/babykitt.png"}
            />
            <div className="flex flex-col items-center  sm:w-1/4">
              <h4>Kittlings</h4>
              <p>Cat-like ponies with long cat tails</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AllPony;

import Layout from "../components/layout/simpleheader";

function Subscribe() {
  return (
    <>
      <Layout title={"Join Us!"}>
        <div className="w-full">
          <img className="mx-auto" src="ui/happy.png" />
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeparmfGT_quR0rITnKGY-YfpG-uzB0pjmWVjrFrZQrvK29Og/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Mailing List Form"
          >
            Loading…
          </iframe>
        </div>
      </Layout>
    </>
  );
}

export default Subscribe;

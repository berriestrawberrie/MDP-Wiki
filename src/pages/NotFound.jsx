import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="bg-gradient-to-b from-cyan-100 to-sky-300 h-screen flex flex-col items-center p-8">
        <h1 className="cherry-font text-5xl text-sky-300 text-center">
          # 404 Page Not Found!
        </h1>
        <div className="relative float mb-16">
          <img className="w-full sm:w-3/4" src="ui/sadunicorn.png" />
          <img
            className="absolute -right-[20px] -bottom-[20%] "
            src="ui/cloud.png"
          />
        </div>
        <p className="text-white">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <button className="block bg-white mx-auto mt-2 rounded-xl px-4 py-2 border-b-4 border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 transition-all duration-200">
            Return Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;

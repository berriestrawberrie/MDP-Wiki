import { FaTumblr } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Icons() {
  return (
    <>
      <div className="w-full">
        <ul className="icons flex  justify-end items-center gap-2">
          <li>
            <a href="https://ko-fi.com/mydreampony" target="blank">
              <img src="ui/kofi3.png" />
            </a>
          </li>
          <li>
            <a href="https://www.tumblr.com/mydreampony-blog" target="blank">
              <FaTumblr className="text-3xl" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@BerrieMilk" target="blank">
              <FaYoutube className="text-4xl" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

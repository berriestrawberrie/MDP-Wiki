export default function Header({ title }) {
  return (
    <>
      <div className="header_container flex  justify-center">
        <h2 className="text-white mt-24 capitalize cherry-font font-bold break-words w-full max-w-screen-md mx-auto px-4 text-center">
          {title}
        </h2>
      </div>
    </>
  );
}

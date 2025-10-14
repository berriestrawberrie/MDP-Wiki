export default function Header({ title }) {
  return (
    <>
      <div className="header_container">
        <h2 className="capitalize text-3xl font-bold">{title}</h2>
      </div>
    </>
  );
}

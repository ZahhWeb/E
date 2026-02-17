import '../index.css';
export default function Header({ toggleMenu }) {
  return (
    <>
      <span className="hamburger" onClick={toggleMenu}>
        ☰
      </span>
      <h1>Dashboard</h1>
    </>
  );
}
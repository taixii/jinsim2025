import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-white">
      <Link to="/" className="text-xl font-bold">진심모의수능</Link>
      <div className="flex gap-4">
        {['about', 'tests', 'search'].map((route, i) => (
          <Link
            key={i}
            to={`/${route}`}
          >
            <button>{route === 'about' ? 'About' : route === 'tests' ? '신청하기' : '신청내역 확인'}</button>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
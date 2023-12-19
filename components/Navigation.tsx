import Link from "next/link";

const Navigation = () => {
  return (
    <div className="p-2 bg-amber-300">
      <div className="navbar bg-base-100 rounded">
        <div className="flex-1">
          <Link href="/home" className="btn btn-ghost text-xl">
            Sap
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/home/about">About</Link>
            </li>
            <li>
              <Link href="/home/wisdom">Wisdom</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

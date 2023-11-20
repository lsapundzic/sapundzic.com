import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="./" className="btn btn-ghost normal-case text-xl">
          Sapundzic
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="./wisdom">Family Wisdom</Link>
          </li>
          {/* For creating a dropdown menu*/}
          {/*<li>*/}
          {/*  <details>*/}
          {/*    <summary>Parent</summary>*/}
          {/*    <ul className="p-2 bg-base-100">*/}
          {/*      <li>*/}
          {/*        <a>Link 1</a>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <a>Link 2</a>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </details>*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import Image from "next/image";

// Top Navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <button className="btn-logo">CREATE</button>
          </Link>
        </li>
        <li>
          <Link href="/games">
            <button className="btn-logo">GAMES</button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <button className="btn-logo">ABOUT</button>
          </Link>
        </li>
        {/* user is signed in and has username*/}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <Image src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

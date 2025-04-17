import React from "react";
import { Nav } from "@/components/ds";
import Link from "next/link";

function NavBar() {
  return (
    <Nav>
      <div>Logo</div>
      <ul>
        <li>
          <Link href={"/"}/>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;

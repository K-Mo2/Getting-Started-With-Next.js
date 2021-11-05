import React from "react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <h1>This is the News Page</h1>
      <ul>
        <li>
          <Link href="/news/param">This is the link to details page</Link>
        </li>
        <li>Not a link</li>
      </ul>
    </div>
  );
}

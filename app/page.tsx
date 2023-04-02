import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <h1>
            <Link href="/static">Static</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link href="/server">Server</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link href="/client">client</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link href="/parallel">Parallel</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link href="/sequential">Sequential</Link>
          </h1>
        </li>
      </ul>
    </div>
  );
}

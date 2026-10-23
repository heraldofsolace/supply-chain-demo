import axios from "axios";
import _ from "lodash";

export default function Home({ items }) {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Supply Chain Demo</h1>
      <p>A minimal Next.js app used to generate sample dependency scan results.</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const items = _.map(
    [
      { id: 1, name: "Example item one" },
      { id: 2, name: "Example item two" },
    ],
    (item) => item
  );

  return { props: { items } };
}

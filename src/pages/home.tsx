import { createSignal } from "solid-js";
import Header from "./header";

export default function Home() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <Header />
    </>
  );
}

import Image from "next/image";
import AllExpensePage from "./components/allExpense/page";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <AllExpensePage />
      </main>
    </div>
  );
}

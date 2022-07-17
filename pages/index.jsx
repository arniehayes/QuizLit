import Link from "next/link"

const Home = () => {

  return (
    <div>
      <Link href="/Category">
        <button>Start New Game!</button>
      </Link>
    </div>
  );
}

export default Home

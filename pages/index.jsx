import Link from "next/link"

const Home = () => {

  return (
    <div>
      <Link href="/Categories">
        <button>Start New Game!</button>
      </Link>
    </div>
  );
}

export default Home

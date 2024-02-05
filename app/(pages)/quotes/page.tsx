import CircleProgressBar from "../../components/CircleProgressBar";

interface Post {
  id: number;
  quote: string;
  author: string;
}

interface Posts {
  quotes: Post[];
  total: number;
  limit: number;
  skip: number;
}

async function getQuotes(): Promise<Posts> {
  const res = await fetch("https://dummyjson.com/quotes");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Quotes() {
  const { quotes } = await getQuotes();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CircleProgressBar />
      <section className="w-[80%] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quotes &&
          quotes.map((quote, index) => (
            <article
              key={quote?.id}
              className="mb-7 p-8 border-[1px] rounded-xl border-gray-400 "
            >
              <p className="text-xl text-gray-300 pb-4">
                {index + 1}. {quote.quote}
              </p>
              <h2 className="text-base text-gray-300 pb-4">{quote.author}</h2>
            </article>
          ))}
      </section>
    </main>
  );
}

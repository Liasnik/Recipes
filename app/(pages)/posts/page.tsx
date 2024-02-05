import ReadingProgress from "@/app/components/ReadingProgress";

interface Post {
  id: number;
  title: string;
  body: string;
  reactions: number;
  tags: string[];
  userId: number;
}

interface Posts {
  posts: Post[];
  total: number;
  limit: number;
  skip: number;
}

async function getData(): Promise<Posts> {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { posts } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ReadingProgress />
      <section className="w-[80%] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts &&
          posts.map((product, index) => (
            <article
              key={product?.id}
              className="mb-7 p-8 border-[1px] rounded-xl border-gray-400 "
            >
              <h2 className="text-3xl text-gray-300 pb-4">
                {index + 1}. {product?.title}
              </h2>
              <p className="text-base text-gray-300 pb-4">{product.body}</p>
            </article>
          ))}
      </section>
    </main>
  );
}

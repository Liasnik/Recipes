import { Recipes } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export async function getRecipes(): Promise<Recipes> {
  let data;
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    data = await res.json();
  } catch (error) {
    console.error(error);
  }

  return data;
}

export default async function RecipesPage() {
  const { recipes } = await getRecipes();

  return (
    <div className="w-full pt-8 lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`./recipe/${recipe.id}`}>
          <div className="flex flex-col gap-2 items-center">
            <h2>
              {recipe.name == "Russian Borscht" ? "Hriuchevo" : recipe.name}
            </h2>
            <div className="rounded-xl">
              <Image
                src={recipe.image}
                alt={`photo - ${recipe.name}`}
                className="rounded-md w-[300px] md:w-[250px] "
                width={200}
                height={200}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

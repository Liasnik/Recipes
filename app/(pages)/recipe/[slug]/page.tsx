import Image from "next/image";
import { getRecipes } from "@/app/page";

export default async function RecipePage({
  params: { slug },
}: {
  params: { slug: number };
}) {
  const { recipes } = await getRecipes();

  return (
    <div className="flex flex-col gap-8 first-line:w-full lg:w-[80%] pt-5 mx-auto ">
      {recipes.map(
        (recipe) =>
          recipe.id == slug && (
            <div
              key={recipe.id}
              className="flex flex-col pt-5  gap-2 items-center"
            >
              <h2 className="text-orange-400 text-4xl mb-12 px-5">
                {recipe.name == "Russian Borscht" ? "Hriuchevo" : recipe.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-12 text-slate-200 text-2xl">
                <div className="flex flex-col justify-center items-center p-4 shadow-blue-900">
                  <Image
                    src={recipe.image}
                    alt={`photo - ${recipe.name}`}
                    className="shrink rounded-md w-[300px] md:w-[250px] lg:w-[500px] "
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col p-4 items-center ">
                  <h3 className="text-orange-400 mb-5">Instructions</h3>
                  <p className="  whitespace-break-spaces">
                    {recipe.instructions}
                  </p>
                </div>
                <div className="flex flex-col p-4  items-center">
                  <h3 className="flex text-orange-400   mb-5">Ingredients</h3>
                  <p>{recipe.ingredients}</p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

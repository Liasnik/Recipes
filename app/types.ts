import { Key, ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Recipes {
  limit: number;
  recipes: Recipe[];
  skip: number;
  total: number;
}

export interface Recipe {
  caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  id: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  mealType: string[];
  name: string;
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  servings: number;
  tags: string[];
  userId: number;
}

export interface Product {
  discountPercentage: number;
  discountedPrice: number;
  id: number;
  price: number;
  quantity: number;
  thumbnail: string;
  title: string;
  total: number;
}

export interface Products {
  total: ReactNode;
  discountedPrice: ReactNode;
  discountPercentage: ReactNode;
  quantity: ReactNode;
  price: ReactNode;
  id: Key | null | undefined;
  products: Product[];
  title: string;
  thumbnail: string | StaticImport;
}

export interface Cart {
  discountedTotal: number;
  id: number;
  products: Products[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
}

export interface Carts {
  carts: Cart[];
  total: number;
  limit: number;
  skip: number;
}

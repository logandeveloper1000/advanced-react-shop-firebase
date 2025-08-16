// src/api/fakestore.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: { rate: number; count: number };
};

export async function fetchAllProducts(): Promise<Product[]> {
  const { data } = await api.get<Product[]>("/products");
  return data;
}

export async function fetchCategories(): Promise<string[]> {
  const { data } = await api.get<string[]>("/products/categories");
  return data;
}

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const safeCategory = encodeURIComponent(category);
  const { data } = await api.get<Product[]>(
    `/products/category/${safeCategory}?t=${Date.now()}`
  );
  return data;
}

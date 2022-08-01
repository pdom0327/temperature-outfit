import { File } from 'formidable';
import type { NextApiRequest } from 'next';
import { Session } from 'next-auth';

export type ApiRequest = NextApiRequest & {
  session?: Session;
  file?: File;
};

export type UserLocationPostRequest = {
  locationId?: number;
};

export type LocationResponse = { id: number; name: string };

export type CategoryResponse = {
  id: string;
  name: string;
  children?: { id: string; name: string }[];
};

export type ProductGetRequest = {
  query?: string;
  categoryId?: string;
  color?: string;
  page?: number;
  limit?: number;
};

export type ProductPostRequest = {
  name: string;
  categoryId: string;
  color: string;
};

export type ProductResponse = {
  id: string;
  name: string;
  categoryId: string;
  color: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type OutfitGetRequest = {
  startDate?: string;
  endDate?: string;
  minRating?: number;
  maxRating?: number;
};

export type OutfitPostRequest = {
  date?: string;
  productsId?: string;
  comment?: string;
  rating?: number;
};

export type OutfitResponse = {
  id: string;
  date: string;
  imageUrl?: string;
  products: ProductResponse[];
  comment?: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
};

// Types
export type Category = {
  id: number;
  name: string;
};

export type Author = {
  id: number;
  name: string;
};

export type Book = {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: any;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
  category: Category;
};

// Get Recommend Books
export type GetRecommendBooksRequest = {
  by: string;
  categoryId?: number;
  limit?: number;
};
export type GetRecommendBooksResponse = {
  success: boolean;
  message: string;
  data: {
    mode: string;
    books: Book[];
  };
};

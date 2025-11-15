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

// Details
export type AuthorDetail = Author & {
  bio: string;
  createdAt: string;
  updatedAt: string;
};
export type CategoryDetail = Category & {
  createdAt: string;
  updatedAt: string;
};
export type Review = {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  user: User;
};
export type User = {
  id: number;
  name: string;
};
export type BookDetail = Omit<Book, 'author' | 'category'> & {
  author: AuthorDetail;
  category: CategoryDetail;
  reviews: Review[];
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

// Get Book by ID
export type GetBookDetailResponse = {
  success: boolean;
  message: string;
  data: BookDetail;
};

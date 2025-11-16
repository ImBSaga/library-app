// Primary Types
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
};

export type User = {
  id: number;
  name: string;
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

// Extend Details
export type AuthorDetail = Author & {
  bio: string;
  createdAt: string;
  updatedAt: string;
};
export type CategoryDetail = Category & {
  createdAt: string;
  updatedAt: string;
};

// Recommend Books
export type RecommendBooks = Book & {
  author: Author;
  category: Category;
};

// Book Detail
export type BookDetail = Book & {
  author: AuthorDetail;
  category: CategoryDetail;
  reviews: Review[];
};

// All Books
export type AllBooks = Omit<BookDetail, 'reviews'>;

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
    books: RecommendBooks[];
  };
};

// Get Book by ID
export type GetBookDetailResponse = {
  success: boolean;
  message: string;
  data: BookDetail;
};

// Get All Books
export type GetAllBooksRequest = {
  q?: string;
  categoryId?: number;
  authorId?: number;
  page?: number;
  limit?: number;
};
export type GetAllBooksResponse = {
  success: boolean;
  message: string;
  data: {
    books: AllBooks[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
};

// Primary Types
export type Profile = {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
};

export type LoanStats = {
  borrowed: number;
  late: number;
  returned: number;
  total: number;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type Book = {
  id: number;
  title: string;
  coverImage: any;
};

export type Review = {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  book: Book;
};

// Get Me
export type GetMeResponse = {
  success: boolean;
  message: string;
  data: {
    profile: Profile;
    loanStats: LoanStats;
    reviewsCount: number;
  };
};

// Get Me Reviews
export type GetMeReviewsRequest = {
  page: number;
  limit: number;
};
export type GetMeReviewsResponse = {
  success: boolean;
  message: string;
  data: {
    reviews: Review[];
    pagination: Pagination;
  };
};

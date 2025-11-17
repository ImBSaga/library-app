// Primary Types
export type BookStats = {
  rating: number;
  reviewCount: number;
};

export type Review = {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
};

// Create / Update Reviews
export type CreateUpdateReviewRequest = {
  bookId: number;
  star: number;
  comment: string;
};

export type CreateUpdateReviewResponse = {
  success: boolean;
  message: string;
  data: {
    review: Review;
    bookStats: BookStats;
  };
};

// Delete Reviews
export type DeleteReviewResponse = {
  success: boolean;
  message: string;
  data: {
    bookStats: BookStats;
  };
};

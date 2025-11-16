// Primary Types
export type Book = {
  id: number;
  title: string;
  coverImage: any;
};

export type Loan = {
  id: number;
  userId: number;
  bookId: number;
  status: string;
  borrowedAt: string;
  dueAt: string;
  returnedAt: any;
  book: Book;
};

// Get My Loans
export type GetMyLoansResponse = {
  success: boolean;
  message: string;
  data: {
    loans: Loan[];
  };
};

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
};

// My Loan
export type MyLoan = Loan & {
  book: Book;
};

// Get My Loans
export type GetMyLoansResponse = {
  success: boolean;
  message: string;
  data: {
    loans: MyLoan[];
  };
};

// Create Loan Book
export type CreateLoanRequest = {
  bookId: number;
  days: number;
};
export type CreateLoanResponse = {
  success: boolean;
  message: string;
  data: {
    loan: Loan;
  };
};

// Return Book
export type ReturnLoanResponse = {
  success: boolean;
  message: string;
  data: {
    loan: Loan;
  };
};

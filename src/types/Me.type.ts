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

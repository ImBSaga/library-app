// Primary Types
export type Author = {
  id: number;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
};

// Get Authors
export type GetAuthorsResponse = {
  success: boolean;
  message: string;
  data: {
    authors: Author[];
  };
};

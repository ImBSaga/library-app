// Types
export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

// Get Categories
export type GetCategoriesResponse = {
  success: boolean;
  message: string;
  data: {
    categories: Category[];
  };
};

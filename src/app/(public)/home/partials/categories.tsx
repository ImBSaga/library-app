import { useCategories } from '@/hooks/useCategories';
import CategoriesCard from './container/categories-card';

export default function Categories({
  setSelectedCategory,
}: {
  setSelectedCategory: (id: number) => void;
}) {
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  if (categoriesLoading) return <p>Loading categories...</p>;
  if (categoriesError)
    return <p>Error loading categories: {categoriesError}</p>;

  return (
    <section className='grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5'>
      {categories.map((category) => (
        <CategoriesCard
          key={category.id}
          category={category}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </section>
  );
}

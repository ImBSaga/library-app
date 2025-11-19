import { Category } from '@/types/Books.type';

export default function CategoriesCard({
  category,
  setSelectedCategory,
}: {
  category: Category;
  setSelectedCategory: (id: number) => void;
}) {
  return (
    <div
      key={category.id}
      className='border rounded-2xl px-2 py-1.75 md:px-3 md:py-2.75 flex flex-col gap-3 bg-white shadow-[0px_0px_20px_0px_#CBCACA40] cursor-pointer'
      onClick={() => setSelectedCategory(category.id)}
    >
      <div className='h-14 md:h-16 rounded-[10px] md:rounded-[12px] bg-[#E0ECFF]'>
        missing img
      </div>
      <h3 className='text-text-xs font-semibold text-neutral-950 md:text-text-md'>
        {category.name}
      </h3>
    </div>
  );
}

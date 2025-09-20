export const ProductSkeleton = () => {
  return (
    <div className="card-product p-0 overflow-hidden animate-pulse">
      <div className="skeleton-image h-48 w-full" />
      <div className="p-4 space-y-3">
        <div className="skeleton-text w-3/4" />
        <div className="skeleton-text w-1/2" />
        <div className="flex justify-between items-center">
          <div className="skeleton-text w-1/4" />
          <div className="skeleton h-10 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 18 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};
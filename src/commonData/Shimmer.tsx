const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4"
          >
            <div className="h-52 animate-pulse rounded bg-gray-200"></div>

            <div className="mt-4 h-4 animate-pulse rounded bg-gray-200"></div>

            <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>

            <div className="mt-4 h-8 animate-pulse rounded bg-gray-200"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

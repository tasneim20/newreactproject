function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E9E9E3]">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#A3B18A] border-t-[#4D6B59]"></div>

        <h2 className="mt-6 text-2xl font-bold text-[#4D6B59]">Loading...</h2>

        <p className="mt-2 text-gray-600">Please wait a moment</p>
      </div>
    </div>
  );
}

export default Loading;

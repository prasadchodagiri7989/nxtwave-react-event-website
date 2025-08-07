
export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white py-8 px-4 text-center shadow-md">
      <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide animate-fade-in-down">
        Welcome to Event World 🎉
      </h1>
      <p className="mt-3 text-sm md:text-lg max-w-2xl mx-auto animate-fade-in-up">
        Find the best shows, concerts, and events happening around you!
      </p>
    </div>
  );
}

import React, { useEffect, useState, useRef } from "react";

interface Event {
  eventName: string;
  cityName: string;
  date: string;
  imgUrl: string;
}

const Recommended: React.FC = () => {
  const [shows, setShows] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchRecommended = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_RECOMMENDED_API}&type=reco`
      );
      const data = await response.json();
      setShows((prev) => [...prev, ...(data?.events || [])]);
    } catch (error) {
      console.error("Error fetching recommended events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommended();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 50;

      if (scrollEnd && !loading) {
        fetchRecommended();
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <section className="px-4 py-4 bg-white">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg md:text-xl font-semibold text-[#1E2022] font-['Inter']">
          Recommended Shows
        </h2>
        <span className="text-sm text-blue-500 cursor-pointer">See all</span>
      </div>

      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide"
      >
        {shows.map((show, idx) => (
          <div
            key={idx}
            className="min-w-[200px] bg-white rounded-lg overflow-hidden shadow-md border border-[#B0BABF]"
          >
            <img
              src="/assets/Rectangle%204-1.svg"
              alt={show.eventName}
              className="h-40 w-full object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-sm text-[#1E2022] font-['Inter']">
                {show.eventName}
              </h3>
              <p className="text-xs text-[#989090] font-['Inter']">
                {new Date(show.date).toDateString()}
              </p>
              <p className="text-xs text-[#989090] font-['Inter']">
                {show.cityName}
              </p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="min-w-[200px] flex items-center justify-center text-gray-500">
            Loading more...
          </div>
        )}
      </div>
    </section>
  );
};

export default Recommended;

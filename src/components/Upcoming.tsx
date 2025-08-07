import React, { useEffect, useState } from "react";

interface Event {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: string;
  imgUrl: string;
}

const UpcomingEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    if (!hasMore) return;
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_RECOMMENDED_API}&page=${page}&type=upcoming`
      );
      const data = await response.json();
      setEvents((prev) => [...prev, ...data.events]);
      setHasMore(page < data.totalPages);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (bottom && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <section className="px-4 py-6 bg-white">
      <h2 className="text-xl font-semibold text-[#1E2022] mb-4 font-['Inter']">
        Upcoming Events
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="border border-[#B0BABF] rounded-lg overflow-hidden shadow-sm bg-white"
          >
            <img
              src="/assets/Rectangle%204-1.svg"
              alt={event.eventName}
              className="h-48 w-full object-cover"
            />
            <div className="p-3 space-y-1">
              <h3 className="font-semibold text-md text-[#1E2022]">
                {event.eventName}
              </h3>
              <p className="text-sm text-[#989090]">
                📍 {event.cityName} • {new Date(event.date).toDateString()}
              </p>
              <p className="text-xs text-[#989090]">
                🌤 {event.weather} • 📏{" "}
                {parseFloat(event.distanceKm).toFixed(0)} km away
              </p>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center mt-4 text-sm text-gray-500">
          Loading more events...
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;

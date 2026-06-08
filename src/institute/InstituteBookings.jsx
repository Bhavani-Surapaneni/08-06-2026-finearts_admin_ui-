import { useEffect, useState } from "react";
import { getBookings } from "../services/instituteService";

export default function Bookings() {
  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const res = await getBookings();
    setBookings(res.data);
  };

  return (
    <div>

      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="glass-effect p-4 rounded-xl mb-4"
        >
          <h3>{booking.student_name}</h3>

          <p>{booking.class_name}</p>

          <p>{booking.status}</p>
        </div>
      ))}

    </div>
  );
}
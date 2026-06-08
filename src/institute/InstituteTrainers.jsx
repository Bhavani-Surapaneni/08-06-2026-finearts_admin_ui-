import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getInstituteTrainers,
} from "../services/instituteService";

export default function InstituteTrainers() {
  const [loading, setLoading] =
    useState(true);

  const [trainers, setTrainers] =
    useState([]);

  const loadTrainers = async () => {
    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      const res =
        await getInstituteTrainers(
          token
        );

      console.log(
        "TRAINERS RESPONSE =",
        res
      );

      setTrainers(
        res?.data || []
      );
    } catch (err) {
      console.error(err);

      toast.error(
        "Failed to load trainers"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrainers();
  }, []);

  if (loading) {
    return (
      <div className="text-white p-6">
        Loading trainers...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">
          Trainers
        </h1>

        <p className="text-gray-400 mt-1">
          Manage institute trainers
        </p>
      </div>

      {/* Trainers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.length > 0 ? (
          trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="glass-effect p-6 rounded-3xl border border-white/10"
            >
              <img
                src={
                  trainer.profile_image ||
                  trainer.image_url ||
                  "https://via.placeholder.com/150"
                }
                alt={trainer.name}
                className="w-24 h-24 rounded-full object-cover border border-gray-700"
              />

              <h2 className="text-xl font-semibold text-white mt-4">
                {trainer.name}
              </h2>

              <p className="text-gray-400 mt-1">
                {trainer.mobile}
              </p>

              <p className="text-gray-400">
                {trainer.email}
              </p>

              <p className="text-gray-400 mt-2">
                {trainer.speciality}
              </p>

              <div className="mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    trainer.approval_status ===
                    "APPROVED"
                      ? "bg-green-500/20 text-green-400"
                      : trainer.approval_status ===
                        "REJECTED"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {trainer.approval_status ||
                    "PENDING"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 py-10">
            No trainers found
          </div>
        )}
      </div>
    </div>
  );
}
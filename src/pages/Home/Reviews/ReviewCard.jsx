import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="card bg-base-100 shadow-lg rounded-2xl p-6">
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-4 left-4 text-3xl text-primary opacity-80">
              <FaQuoteLeft />
            </div>

            {/* Quote text */}
            <p className="text-gray-700 text-sm leading-relaxed pl-10 pr-2">
              {testimonial}
            </p>

            {/* dotted divider */}
            <div className="border-t border-dashed border-gray-300 my-4" />

            {/* Avatar + name */}
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-2 overflow-hidden">
                  <img src={user_photoURL} alt={name} />
                </div>
              </div>

              <div>
                <div className="font-semibold text-gray-800">{name}</div>
                {/* <div className="text-xs text-gray-500">{title}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

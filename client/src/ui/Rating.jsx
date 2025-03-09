import { Star1 } from "iconsax-react";
import Heading from "./Heading";
import { useState } from "react";
import { useAddRating } from "../feature/articles/useAddRating";

function Rating({ article }) {
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);
  const { addRating } = useAddRating();

  function handelAddRating({ articleId, rate }) {
    addRating({ articleId, rate });
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center justify-center gap-3">
      <Heading>امتیازدهی مقاله</Heading>
      <div className="flex justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star1
            size={32}
            variant={rating >= star || ratingHover >= star ? "Bold" : ""}
            color={rating >= star || ratingHover >= star ? "green" : "gray"}
            key={star}
            onClick={() =>
              handelAddRating({ articleId: article?._id, rate: star })
            }
            onMouseEnter={() => setRatingHover(star)}
            onMouseLeave={() => setRatingHover(0)}
            className={`text-3xl ${
              rating >= star ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </Star1>
        ))}
      </div>
      <p className="text-base w-full font-semibold text-gray-600  text-center space-x-6">
        <span> امتیاز مقاله: {article?.averageRating || "نامشخص"}</span>
        <span>کل امتیازات : {article?.ratingsCount || "نامشخص"}</span>
      </p>
    </div>
  );
}

export default Rating;

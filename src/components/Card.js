import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "./style.css";
import { toast } from "react-toastify";

const Card = (props) => {
  const { course, likedCourses, setLikedCourses } = props;

  const description =
    course.description.length > 100
      ? course.description.substring(0, 100) + "..."
      : course.description;

  const clickHandler = () => {
    console.log("course::: ", course);
    if (likedCourses.includes(course.id)) {
      // Already liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      // Not liked yet
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  };

  return (
    <div className="w-[300px] bg-blue-900 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} className="card-img" alt={course.title} />
        <div>
          <button
            className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center"
            onClick={clickHandler}
          >
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
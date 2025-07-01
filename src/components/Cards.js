import React, { useState } from "react";
import Card from "./Card";
import "./style.css";

const Cards = (props) => {
  const { courses, category } = props;
  const [likedCourses, setLikedCourses] = useState([]);

  // Returns a list of all courses received
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex justify-center flex-wrap gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses} // Corrected prop name
          setLikedCourses={setLikedCourses} // Corrected prop name
        />
      ))}
    </div>
  );
};

export default Cards;
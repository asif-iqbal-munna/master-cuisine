import { useState } from "react";
import { useEffect } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((resp) => resp.json())
      .then((data) => setCourses(data));
  }, []);
  return [courses]
};
export default useCourses;
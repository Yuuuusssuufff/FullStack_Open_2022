import React from "react";

const Header = ({ course }) => <h1>{course.name}</h1>;

const Content = ({ course }) => {
  return (
    <div>
      <ul>
        {course.parts.map((c) => (
          <li key={c.id}>
            {c.name} {c.exercises}
          </li>
        ))}
      </ul>
      {`total of ${course.parts.reduce(
        (curr, acc) => curr + acc.exercises,
        0
      )} exercises`}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course[0]} />
      <Content course={course[0]} />
      <Header course={course[1]} />
      <Content course={course[1]} />
    </div>
  );
};

export default Course;

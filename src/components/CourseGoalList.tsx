import type { CourseGoals } from "../App";
import CourseGoal from "./CourseGoal.tsx";

interface CourseGoalsList {
  goals: CourseGoals[];
}

const CourseGoalList = ({ goals }: CourseGoalsList) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal key={goal.id} title={goal.title}>
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;

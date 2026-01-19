import type { CourseGoals as GoalType } from "../App";
import CourseGoal from "./CourseGoal.tsx";

interface CourseGoalsList {
  goals: GoalType[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalsList) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal
            key={goal.id}
            id={goal.id}
            title={goal.title}
            onDelete={onDeleteGoal}
          >
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;

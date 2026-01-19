import type { CourseGoals as GoalType } from "../App";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";

interface CourseGoalsList {
  goals: GoalType[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalsList) => {
  if (goals.length === 0)
    return (
      <InfoBox mode="hint">
        You have no course goals yet, start adding some
      </InfoBox>
    );

  return (
    <ul>
      {goals.length >= 4 && (
        <InfoBox mode="warning" severity="high">
          Becarful , thats too much goals
        </InfoBox>
      )}
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

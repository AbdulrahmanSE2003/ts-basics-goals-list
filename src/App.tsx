import goalsImage from "./assets/image.png";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  function handleAddGoal() {
    setGoals((goals) => {
      const newGoal = {
        title: "Test Goals",
        description: "Learn the basics with max",
        id: Math.random(),
      };
      return [...goals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "a List og goals" }}>
        <h1>Your Course Goals </h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}

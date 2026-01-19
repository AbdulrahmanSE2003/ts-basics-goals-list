import goalsImage from "./assets/image.png";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  function handleAddGoal(title: string, description: string) {
    setGoals((goals) => {
      const newGoal = {
        title: title,
        description: description,
        id: Math.random(),
      };
      return [...goals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((goals) => goals.filter((g) => g.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "a List og goals" }}>
        <h1>Your Course Goals </h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

import CourseGoal from "./components/CourseGoal.tsx";
import goalsImage from "./assets/image.png";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImage, alt: "a List og goals" }}>
        <h1>Your Course Goals </h1>
      </Header>
      <CourseGoal title={`Learn TS`}>start with basics</CourseGoal>
    </main>
  );
}

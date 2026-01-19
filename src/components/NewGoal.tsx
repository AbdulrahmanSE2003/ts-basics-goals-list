import { useRef, type FormEvent } from "react";

interface NewGoalProps {
  onAdd: (goal: string, summery: string) => void;
}

const NewGoal = ({ onAdd }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summery = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummery = summery.current!.value;

    onAdd(enteredGoal, enteredSummery);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summery ">Short summery</label>
        <input id="summery " type="text" ref={summery} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;

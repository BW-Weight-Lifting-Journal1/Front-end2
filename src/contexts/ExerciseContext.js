import { createContext } from "react";

const initialExercise = {
  name: "Push Up",
  reps: "15",
  weight: "150lbs",
  muscles_targeted: "Chest & Arms"
};

export const ExerciseContext = createContext(initialExercise);

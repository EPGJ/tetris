import { useState } from 'react';
import { createBorder } from '../Utils/createBorder';

export const useStage = () => {

  const [stage, setStage] = useState(createBorder());
  return [stage, setStage];

}
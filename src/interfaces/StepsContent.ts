interface StepService {
  title: string;
  content: string;
}

export type StepsContent = Record<string, StepService>;

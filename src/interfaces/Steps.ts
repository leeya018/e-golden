export type Steps = {
  title: string;
  list: StepItem[];
};

type StepItem = {
  label: string;
  title: string;
  description: string;
};

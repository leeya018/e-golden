export type ServiceDetail = {
  label: string;
  description?: string;
  steps?: string[];
  options?: string[];
  services?: string[];
  [key: string]: any;
};

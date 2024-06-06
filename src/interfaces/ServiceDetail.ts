import { SubService } from "./SubService";

export type ServiceDetail = {
  label: string;
  description?: string;
  steps?: string[];
  options?: string[];
  services: SubService[];
  [key: string]: any;
};

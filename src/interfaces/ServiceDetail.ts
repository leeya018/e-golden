import { Packages } from "./Packages";
import { SubService } from "./SubService";

export type ServiceDetail = {
  label: string;
  description?: string;
  services: SubService[];
  steps?: string[];
  packages?: Packages;
  [key: string]: any;
};

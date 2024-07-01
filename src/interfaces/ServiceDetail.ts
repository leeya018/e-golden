import { Package } from "./Package";
import { SubService } from "./SubService";

export type ServiceDetail = {
  label: string;
  description: string[];
  services: SubService[];
  steps?: string[];
  packages?: Package[];
  [key: string]: any;
};

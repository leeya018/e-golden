import { Package } from "./Package";
import { ServiceDetail } from "./ServiceDetail";

export type Service = {
  label: string;
  title: string;
  imageUrl: string;
  description: string[];
  details: ServiceDetail;
  packages?: Package[];
};

import { ServiceDetail } from "./ServiceDetail";

export type Service = {
  title: string;
  imageUrl: string;
  details: Record<string, ServiceDetail>;
};

export type Packages = {
  title: string;
  list: Package[];
};

export type Package = {
  label: string;
  title: string;
  imageUrl: string;
  services: string[];
};

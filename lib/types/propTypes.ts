export type HasChildren = {
  children?: React.ReactNode;
};

export type BaseComponent = HasChildren & {
  className?: string;
};

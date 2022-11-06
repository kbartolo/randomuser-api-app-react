export enum Sort {
  name = "name",
  email = "email",
  location = "location",
}

export type SortingProps = {
  onSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

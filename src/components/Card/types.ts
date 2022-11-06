import { RandomUser } from "../../types";

export interface CardProps {
  user: RandomUser;
  onEdit: (user: RandomUser) => void;
}

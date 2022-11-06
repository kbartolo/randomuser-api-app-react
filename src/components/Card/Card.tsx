import React, { FC, memo } from "react";
import { CardProps } from "./types";
import { limitText } from "../../utils";
import "./styles.scss";

const CardMemo: FC<CardProps> = ({ user, onEdit }) => {
  return (
    <div className="col-sm-3 card rounded border-0 shadow">
      <img
        src="https://ucarecdn.com/11b512b9-23cb-41ba-9be5-5f4654279238/"
        alt="Update User"
        className="card__icon"
        onClick={() => onEdit(user)}
      />
      <div className="card__title rounded-top">{limitText(user.name, 20)}</div>
      <div className="card__picture">
        <div>
          <img src={user.picture} alt={user.name} className="rounded-circle" />
        </div>
      </div>
      <div className="card__info mt-4">
        <div className="card__text mb-1">{user.email}</div>
        <div className="card__text mb-1">{user.phone}</div>
        <div className="card__text mb-1">{limitText(user.location, 30)}</div>
      </div>
    </div>
  );
};

const Card = memo(CardMemo);
export default Card;

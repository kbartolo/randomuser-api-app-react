import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import { Card, Filter, Sorting, Modal, FormEditUser } from "../";
import useFetch from "../../hooks/useFetch";
import { RANDOMUSER_URL } from "../../const";
import { formatUsers } from "../../utils";
import { RandomUser } from "../../types";
import { Sort } from "../Sorting/types";
import "./styles.scss";

const CardListMemo: FC = () => {
  const { loading, result, error } = useFetch(RANDOMUSER_URL, formatUsers);
  const [userToEdit, setUserToEdit] = useState<RandomUser | undefined>();
  const [users, setUsers] = useState<RandomUser[] | undefined>();
  const [toggle, setToggle] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("name");

  useEffect(() => {
    if (result) {
      setUsers(result);
      localStorage.setItem("users", JSON.stringify(result));
    }
  }, [result]);

  const onFilter = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target;
      const data = result?.filter(
        (user) => user.name.includes(value) || user.email.includes(value)
      );
      setUsers(data);
    },
    [result]
  );

  const sorted = useMemo(
    () => (data: any, value: any) => {
      if (users) {
        setSortBy(value);
        const sortData = data.sort((a, b) => {
          return a[value as keyof typeof Sort] > b[value as keyof typeof Sort]
            ? 1
            : -1;
        });

        return sortData;
      }
    },
    [users]
  );

  const onSort = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      const { value } = event.target;
      const sortUsers = sorted(users, value);
      setUsers(sortUsers);
    },
    [users, sorted]
  );

  const onEditUser = useCallback(
    (userValue: RandomUser) => {
      const stringifiedUsers = localStorage.getItem("users");
      if (!stringifiedUsers) return;
      const storeUsers = JSON.parse(stringifiedUsers);
      const updateUsers = storeUsers.map((user: RandomUser) => {
        return user.id === userValue?.id
          ? {
              ...user,
              name: userValue.name,
              email: userValue.email,
              phone: userValue.phone,
              location: userValue.location,
            }
          : user;
      });

      localStorage.setItem("users", JSON.stringify(updateUsers));
      const sortUsers = sorted(updateUsers, sortBy);
      setToggle(!toggle);
      setUsers(sortUsers);
    },
    [toggle, sortBy, sorted]
  );

  const openModalToEditUser = useCallback(
    (_userToEdit: RandomUser) => {
      setToggle(!toggle);
      setUserToEdit(_userToEdit);
    },
    [toggle]
  );

  const onCloseModal = useCallback(() => {
    setToggle(!toggle);
    setUserToEdit(undefined);
  }, [toggle]);

  if (loading) return <div className="container">loading</div>;
  return (
    <div className="container">
      <Modal show={toggle} title="Editar Usuario">
        {userToEdit && (
          <FormEditUser
            userInfo={userToEdit}
            onEdit={onEditUser}
            onClose={onCloseModal}
          />
        )}
      </Modal>
      <div className="toolbar">
        <Filter onFilter={onFilter} />
        <Sorting onSort={onSort} />
      </div>
      <div className="cardlist row">
        {error && <div>Something went wrong: {JSON.stringify(error)}</div>}
        {users &&
          users.map((user, index) => (
            <Card user={user} key={index} onEdit={openModalToEditUser} />
          ))}
      </div>
    </div>
  );
};

const CardList = memo(CardListMemo);
export default CardList;

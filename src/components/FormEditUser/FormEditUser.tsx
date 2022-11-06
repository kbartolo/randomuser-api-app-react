import React, { FC, useEffect, useState } from "react";
import { RandomUser } from "../../types";

type FormEditUserProps = {
  userInfo: RandomUser;
  onEdit: (user: RandomUser) => void;
  onClose: () => void;
};

const FormEditUser: FC<FormEditUserProps> = ({ userInfo, onEdit, onClose }) => {
  const [user, setUser] = useState<RandomUser>(userInfo);

  useEffect(() => {
    setUser(userInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onEdit(user);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <form>
      <div className="form-group row mb-4">
        <label className="col-sm-2 col-form-label">Name:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row mb-4">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
      </div>
      <div className="form-group row mb-4">
        <label className="col-sm-2 col-form-label">Phone:</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group row mb-4">
        <label className="col-sm-2 col-form-label">Location:</label>
        <div className="col-sm-10">
          <input
            type="te"
            className="form-control"
            placeholder="Enter Location"
            value={user.location}
            onChange={(e) => {
              setUser({ ...user, location: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6 text-center">
          <button onClick={handleClose} className="btn btn-danger mb-2">
            Close
          </button>
        </div>

        <div className="col-sm-6 text-center">
          <button onClick={handleEdit} className="btn btn-primary mb-2">
            Accept
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormEditUser;

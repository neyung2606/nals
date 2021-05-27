import { FC, useEffect, useState } from "react";
import { AxiosCreate } from "../../configs/axios";

type TUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
};

const User: FC = () => {
  const [users, setUsers] = useState<TUser[]>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await AxiosCreate.get("users");
    setUsers(res.data);
  };
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Striped Table</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Avatar</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((user: TUser, index: number) => (
                      <tr key={index}>
                        <td className="py-1">
                          <img src={user.avatar} alt="ava" />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

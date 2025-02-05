"use client";
import { UIContext } from "@/app/providers/ui.provider";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import IconButton from "../icon-button/icon-button.component";

const SimpleTable = () => {
  const { referrals } = useContext(UIContext);

  if (!referrals || referrals.length <= 0) {
    return <p>There are no records yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 text-left text-gray-400 font-bold">Given Name</th>
            <th className="px-4 py-2 text-left text-gray-400 font-bold">Surname</th>
            <th className="px-4 py-2 text-left text-gray-400 font-bold">Email</th>
            <th className="px-4 py-2 text-left text-gray-400 font-bold">Phone</th>
            <th className="px-4 py-2 text-left text-gray-400 font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {referrals?.map((referral) => (
            <tr className="border-b" key={referral.id}>
              <td className="px-4 py-2 text-gray-400">{referral.given_name}</td>
              <td className="px-4 py-2 text-gray-400">{referral.surname}</td>
              <td className="px-4 py-2 text-gray-400">{referral.email}</td>
              <td className="px-4 py-2 text-gray-400">{referral.phone}</td>
              <td className="px-4 py-2 flex flex-direction-row gap-1">
                <IconButton>
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="fas fa-check"
                    style={{ color: "gray" }}
                  />
                </IconButton>
                <IconButton>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fas fa-check"
                    style={{ color: "gray" }}
                  />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;

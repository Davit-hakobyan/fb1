import React, { useEffect, useState } from "react";
import "./Messenger.css";
import UsersMessig from "./UsersMessig";
import { avelacnelBaz, messigdelet, poxelmessij } from "../../app/messijBaza";
import { useDispatch, useSelector } from "react-redux";
import TwoUsersMessij from "./TwoUsersMessij";

const Messenger = () => {
  const dispatch = useDispatch();

  const [recipient, setRecipient] = useState("");
  const [perepiska, setPerepiska] = useState([]);
  const [useractiv2, setUseractiv2] = useState("");
  const [messigText, setMessigText] = useState("");
  const users = useSelector((state) => state.users);
  const baza = useSelector((state) => state.baza.baza);
  const mesiguser = users.filter((user) => user.activ != true);
  const activUser = useSelector((state) => state.activUser);

  function addMessig() {
    if (messigText.length <= 0) {
      return;
    }
    setMessigText("");
    dispatch(
      avelacnelBaz({
        id: useractiv2,
        text: {
          senderUser: activUser.id,
          messig: messigText,
          messigID: new Date().getTime().toString(),
        },
      })
    );
  }
  function deletMessig(messigID) {
    dispatch(messigdelet({ userID: useractiv2, messigID }));
  }
  function messigrename(messigID) {}
  useEffect(() => {
    if (baza.hasOwnProperty(useractiv2)) {
      setPerepiska(baza[useractiv2]);
    } else {
      setPerepiska([]);
    }
  }, [baza, useractiv2, setUseractiv2]);

  return (
    <div className="messenger">
      <div className="messenger_div">
        <div className="messuser">
          {mesiguser.map((user) => (
            <UsersMessig
              user={user}
              key={user.id}
              setUseractiv2={setUseractiv2}
              activUser={activUser.id}
              setRecipient={setRecipient}
            />
          ))}
        </div>

        <div className="messmesig">
          <div className="recipientUser">
            {recipient && (
              <div>
                <h3>{recipient}</h3>
              </div>
            )}
          </div>

          <div className="perepis">
            {perepiska.map((e) => (
              <TwoUsersMessij
                messig={e}
                deletMessig={deletMessig}
                messigrename={messigrename}
                useractiv2={useractiv2}
                key={Math.random()}
              />
            ))}
          </div>
          {recipient && (
            <div className="input_div">
              <input
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    addMessig();
                  }
                }}
                value={messigText}
                onChange={(e) => setMessigText(e.target.value)}
                type="text"
              />
              <button onClick={addMessig}>Add messig</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messenger;

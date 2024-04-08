import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {poxelmessij} from "../../app/messijBaza"

const TwoUsersMessij = ({ messig, deletMessig,useractiv2 }) => {
  const ref = useRef(null);
  const dispatch=useDispatch()
  const activUser = useSelector((state) => state.activUser);
  const [rename, setRename] = useState(false);
  const [renameText, setRenameText] = useState(messig.messig);
  function renemMessig() {
    setRename(false);
    dispatch(poxelmessij({id:useractiv2, messigID:messig.messigID,text:renameText}));
  }
  function norenam() {
    setRename(false);
    ref.current.innerHTML = messig.messig;
  }

  return (
    <div className={activUser.id == messig.senderUser ? "grin" : "red"}>
      <b
        ref={ref}
        suppressContentEditableWarning={true}
        onInput={(e) => setRenameText(e.target.innerHTML)}
        contentEditable={rename ? true : false}
      >
        {messig.messig}
      </b>
      {activUser.id == messig.senderUser && (
        <div>
          <button
            onClick={() => deletMessig(messig.messigID)}
            style={{ backgroundColor: "red" }}
          >
            x
          </button>
          {rename ? (
            <>
              <button onClick={renemMessig}>Rn</button>
              <button  onClick={norenam} style={{ backgroundColor: "gray" }}>RX</button>
            </>
          ) : (
            <button onClick={() => setRename(true)}> R</button>
          )}
        </div>
      )}
    </div>
  );
};

export default TwoUsersMessij;

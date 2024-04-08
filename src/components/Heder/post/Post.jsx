import React, { useState } from "react";
import "./Post.css";

import { useDispatch, useSelector } from "react-redux";
import Postcoment from "../postcoment/Postcoment";

const Post = ({ post, deletPost }) => {
  const postcoments = useSelector((state) => state.commentsPost).filter(
    (posts) => posts.postID === post.id
  );

  const [like, setlike] = useState(Math.trunc(Math.random() * 100));
  const [likecontrol, setLikecontrol] = useState(true);
  function likpoxel() {
    if (likecontrol) {
      setlike(like + 1);
      setLikecontrol(false);
    } else {
      setlike(like - 1);
      setLikecontrol(true);
    }
  }

  const [comentpostdiv, setComentpostdiv] = useState(false);
  const users = useSelector((state) => state.users);

  const postUser = users.find((user) => user.id === post.userId);

  return (
    <div className="posts">
      <div className="post">
        <div className="post_div1">
          <div className="postUsername">
            <img className="imguser" src={postUser.imguser} alt="" />
            <h3>{postUser.name}</h3>
          </div>
          <button onClick={() => deletPost(post.id)} className="deletpost">
            x
          </button>
        </div>
        <div className="posttitle">
          <h3>{post.title}</h3>
          <i>{post.title}</i>
        </div>
        <img className="postimg" src={postUser.imgpost} alt="" />
        <br />
        <hr />
        <div className="likecoment">
          <div className="likeqaunt">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              id="likeq"
              fill="currentColor"
              class="bi bi-hand-thumbs-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
            </svg>
            <b>{like}</b>
          </div>
          <div className="comentqaunt">
            <b>{postcoments.length}</b>
            <i>-комментарие</i>
          </div>
        </div>

        <hr />
        <br />
        <div className="coment">
          <div className="coment1" onClick={likpoxel}>
            <svg
              style={{ color: likecontrol ? "" : "blue" }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-hand-thumbs-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
            </svg>

            <br />
            <span>Like</span>
          </div>
          <div
            className="coment1"
            onClick={() => setComentpostdiv(!comentpostdiv)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-chat"
              viewBox="0 0 16 16"
            >
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
            </svg>
            <br />
            <span>Comment</span>
          </div>

          <div className="coment1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-reply"
              viewBox="0 0 16 16"
            >
              <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.7 8.7 0 0 0-1.921-.306 7 7 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254l-.042-.028a.147.147 0 0 1 0-.252l.042-.028zM7.8 10.386q.103 0 .223.006c.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96z" />
            </svg>
            <br />
            <span>Crafts</span>
          </div>
        </div>
        {comentpostdiv && <Postcoment postID={post.id} />}
      </div>
      <br />
    </div>
  );
};

export default Post;

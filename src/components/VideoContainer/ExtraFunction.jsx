export default function ExtraFunction(props) {
  return (
    <div className="extra-func">
      <div className="like">
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          ref={props.likeRef}
          onPointerDown={props.handleLike}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>thumbs-up-solid</title>{" "}
            <g id="Layer_2" data-name="Layer 2">
              {" "}
              <g id="invisible_box" data-name="invisible box">
                {" "}
                <rect width="48" height="48" fill="none"></rect>{" "}
              </g>{" "}
              <g id="icons_Q2" data-name="icons Q2">
                {" "}
                <path d="M38,17H31l.4-3.3C32,8.8,31,4.9,27.8,4h-.3A2,2,0,0,0,26,5.2s-5.7,12-9,14.4V40h1.3a1.6,1.6,0,0,1,1.2.4c1.4,1,6.1,3.6,8.5,3.6h5c5.9,0,11-4,11.5-11.9h0l.5-8A6.7,6.7,0,0,0,38,17ZM3,22V38a2,2,0,0,0,2,2h8V20H5A2,2,0,0,0,3,22Z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <div className="dislike">
        <img src="./dislike.svg" alt="dislike" />
      </div>
      <div className="comment">
        <img src="./comment.svg" alt="comment" />
      </div>
      <div className="share">
        <img src="./share.svg" alt="share" />
      </div>
    </div>
  );
}

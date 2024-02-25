export default function VideoNav(props) {
  return (
    <div className="nav-video">
      <button onPointerDown={props.handleUp} ref={props.upArrow}>
        <img src="./arrow-up.svg" alt="up" />
      </button>
      <button onPointerDown={props.handleDown} ref={props.downArrow}>
        <img src="./arrow-down.svg" alt="down" />
      </button>
    </div>
  );
}

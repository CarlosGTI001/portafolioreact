import $ from "jquery";
import './mouse.css'
export function Mouse() {
  $(document).on("mousemove", (e) => {
    $('.pointer').css({left:e.pageX, top:e.pageY});
  });
  return (
    <div className="trail">
      <div className="pointer pointer1"></div>
      <div className="pointer pointer2"></div>
      <div className="pointer pointer3"></div>
      <div className="pointer pointer4"></div>
      <div className="pointer pointer5"></div>
    </div>
  );
}

import "./button.css";

export function Button(props) {
  return <button className={props.btnTipe}>{props.title}</button>;
}

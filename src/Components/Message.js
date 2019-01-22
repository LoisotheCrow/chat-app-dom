export default ({ data: { title, text, date } }) => (
  <div>
    <h3>{title}</h3>
    <p>{text}</p>
    <span>{date}</span>
  </div>
);

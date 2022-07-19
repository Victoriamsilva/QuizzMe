import "./style.css";

export interface TextAreaProps {
  id?: any;
  name?: any;
  rows?: any;
  cols?: any;
  for?: any;
  label?: any;
  onChange?: any;
  value?: any;
}

export default function TextArea({
  id,
  name,
  rows,
  cols,
  label,
  onChange,
  value
}: TextAreaProps) {
  return (
    <>
      <label>{label}</label>
      <br />
      <textarea value={value} onChange={onChange} id={id} name={name} rows={rows} cols={cols}></textarea>

    </>
  );
}

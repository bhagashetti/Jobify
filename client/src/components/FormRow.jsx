const FormRow = ({ name, labletext, type, defaultValue }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labletext || name}
      </label>
      <input
        type={type}
        name={name}
        className="form-input"
        id={name}
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
};
export default FormRow;

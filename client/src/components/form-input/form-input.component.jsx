import './form-input.styles.css';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className='group-container'>
    <input className='form-input' onChange={handleChange} {...props} />
    {label ? (
      <label
        className={`form-input-label ${props.value.length ? 'shrink' : ''}`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

import './custom-button.styles.css';

export const CustomButton = ({ children, ...props }) => (
  <button {...props} className={`btn ${props.className}`}>
    {children}
  </button>
);

export default CustomButton;

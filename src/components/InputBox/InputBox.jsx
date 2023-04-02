
export const InputBox = ({ type, maxWidth, handleChange, placeholder, onFocus }) => {
  return (
    <div className={`input-group mw-${maxWidth}`}>
      <input
        type={type}
        placeholder={placeholder}
        className='form-control'
        onChange={handleChange}
        onFocus={onFocus}
      />
    </div>
  );
};

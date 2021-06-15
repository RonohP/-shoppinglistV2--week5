
const style = {
  padding: '15px 20px',
  float: 'left',
  margin: '20px 15px',
};

const FilterButton = (props) => {

  return (
    <button
      type='button'
      style={style}
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.text)}
    >
      {props.icon}&nbsp; {props.text}
    </button>
  );
};

export default FilterButton;

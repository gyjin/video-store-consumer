import React from 'react';
import PropTypes from 'prop-types';


// class Student extends React.Component{
const Customer = (props) => {
  // Component functions always return JSX

  // const { present } = props;

  // const buildStyles = () => {
  //   let selectStyles = props.class.toLowerCase();
  //   selectStyles = selectStyles + ' ' + (present ? 'present' : 'absent');
  //   return selectStyles;
  // }
  // const onTogglePresentClick = () => {
  //   console.log('Toggling Present');
  //   props.togglePresent(props.email);
  // }
  // const onDeleteClick = () => {
  //   console.log(`Deleting ${ props.email }`);
  //   props.delete(props.email);
  // }
  return (
    <li>
      {props.name} 
      {/* <p>{props.email}</p> */}
      {/* <button onClick={onTogglePresentClick}>Mark
        {present ? ' Absent' : ' Present'}
      </button>
      <button onClick={onDeleteClick}>Delete</button> */}
    </li>
  );
};


// Student.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string,
//   class: PropTypes.string,
//   present: PropTypes.bool.isRequired,
//   togglePresent: PropTypes.func.isRequired,
//   delete: PropTypes.func.isRequired,
// };

// Student.defaultProps = {
//   class: 'no-class',
//   email: 'No Email On File'
// };

export default Customer;
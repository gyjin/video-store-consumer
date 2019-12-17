import React from 'react';
import Customer from './Customer';
import axios from 'axios';

class CustomerCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      selectedCustomer: '',
    }
  }


  componentDidMount() {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        this.setState({customers: response.data})
      })
      .catch((error) => {
        this.setState({error: error.message})
      })
  }

  // togglePresent = (studentEmail) => {
  //   const { students } = this.state;
  //   //    const students = this.state.students;

  //   const studentToUpdate = students.find((student) => student.email === studentEmail);

  //   studentToUpdate.present = !studentToUpdate.present;

  //   this.setState({
  //     //students: students,
  //     students,
  //   });
  // }

  // deleteStudent = (studentEmail) => {
  //   // Use indexOf to get the index
  //   // Use splice with the index

  //   const updatedStudents =
  //     this.state.students.filter((student) => student.email !== studentEmail);

  //   this.setState({
  //     students: updatedStudents,
  //   });
  // }

  // addStudent = (newStudent) => {
  //   console.log("add student ", newStudent.name)
  //   const students = this.state.students
  //   students.push(newStudent)

  //   this.setState({
  //     students
  //   })
  // }

  makeCollection () {
    const customerCollection = this.state.customers.map((customer, i) => {
      return <Customer
        name={customer.name}
        registeredAt={customer.registered_at}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        accountCredit={customer.account_credit}
        moviesCheckedOutCount={customer.movies_checked_out_count}
        key={i}
      />;
    }
    );
    return customerCollection
  }

  render () {
    return (
      <div>
      {/* <NewStudentForm addStudentCallback={this.addStudent}/> */}
      <h3>Customers</h3>
      <ul>
        {this.makeCollection()}
      </ul>
      </div>
    );
  }
};

// StudentCollection.propTypes = {
//   people: PropType.arrayOf(PropType.shape({
//     name: PropType.string.isRequired,
//     email: PropType.string.isRequired,
//     class: PropType.string,
//     present: PropType.bool,
//   })),
// };


export default CustomerCollection;
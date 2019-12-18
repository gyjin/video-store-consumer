// import React from 'react';
// import axios from 'axios';

// class Rental extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   customers: [],
//     // }
//   }

//   newRental = (props) => {
//     console.log('pet = ', pet);
//     axios.post('http://localhost:3000/pets', pet)
//       .then((response) => {
//         // We can update the state so we don't need to make another GET request
//         const updatedData = this.state.petList;
//         updatedData.push(response.data);
//         this.setState({
//           petList: updatedData,
//           error: undefined,
          
//         });
//       })
//       .catch((error) => {
//         // Use the same idea we had in our GET request
//         this.setState({ error: error.message });
//       });
//   }

//   setCustomer = (customer) => {
//     this.props.setCustomerCallback(customer);
//   }

//   makeCollection () {
//     const customerCollection = this.state.customers.map((customer, i) => {
//       return <Customer
//         name={customer.name}
//         registeredAt={customer.registered_at}
//         address={customer.address}
//         city={customer.city}
//         state={customer.state}
//         postal_code={customer.postal_code}
//         phone={customer.phone}
//         accountCredit={customer.account_credit}
//         moviesCheckedOutCount={customer.movies_checked_out_count}
//         selectCustomerCallback={this.props.setCustomerCallback}
//         key={i}
//       />;
//     }
//     );
//     return customerCollection
//   }

//   render () {
//     return (
//       <div>
//       <h3>Customers</h3>
//       <ul>
//         {this.makeCollection()}
//       </ul>
//       </div>
//     );
//   }
// };

// export default CustomerCollection;
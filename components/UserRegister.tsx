// components/UserRegister.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  shirtSize: string;
  UHid: string;
  paymentFor: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
}

const UserRegister: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    shirtSize: '',
    UHid: '',
    paymentFor: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Shirt Size:</label>
          <input type="text" name="shirtSize" value={formData.shirtSize} onChange={handleInputChange} />
        </div>

        <div>
          <label>UHID:</label>
          <input type="text" name="UHid" value={formData.UHid} onChange={handleInputChange} />
        </div>

        <div>
          <label>Payment For:</label>
          <input type="text" name="paymentFor" value={formData.paymentFor} onChange={handleInputChange} />
        </div>

        <div>
          <label>Card Number:</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Card Expiry:</label>
          <input type="text" name="cardExpiry" value={formData.cardExpiry} onChange={handleInputChange} required />
        </div>

        <div>
          <label>Card CVC:</label>
          <input type="text" name="cardCVC" value={formData.cardCVC} onChange={handleInputChange} required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;

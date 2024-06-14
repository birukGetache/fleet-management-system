import React, { useState } from 'react';

function AddCarForm() {
  const [carDetails, setCarDetails] = useState({
    carType: '',
    carModel: '',
    carYear: '',
    transmission: '',
    cabType: '',
    fuelType: '',
    carimage:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(carDetails);
  };

  return (
    <form className="add-car-form" onSubmit={handleSubmit}>
      <h2>Add New Car</h2>
      <div className="form-section">
        <label>
          Car Image:
          <input
            type="file"
            name="carimage"
            value={carDetails.carimage}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Car Model:
          <input
            type="text"
            name="carModel"
            value={carDetails.carModel}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-section">
        <label>
          Car Year:
          <input
            type="number"
            name="carYear"
            value={carDetails.carYear}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Transmission:
          <select
            name="transmission"
            value={carDetails.transmission}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </label>
      </div>
      <div className="form-section">
        <label>
          Cab Type:
          <select
            name="cabType"
            value={carDetails.cabType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="single">Single Gabina</option>
            <option value="double">Double Gabina</option>
          </select>
        </label>
        <label>
          Fuel Type:
          <select
            name="fuelType"
            value={carDetails.fuelType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
          </select>
        </label>
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
}

export default AddCarForm;

import { useState } from "react";

const Forms = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isfriendly: false,
    empolyment: "",
    favcolor: "",
  });

  console.log(formData);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setformData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="m-5">
      <form id="my-form" className=" w-25" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />{" "}
        <br /> <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Email Id"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />{" "}
        <br />
        <br />
        <textarea
          placeholder="Comments"
          name="comments"
          onChange={handleChange}
          value={formData.comments}
        />{" "}
        <br />
        <br />
        <input
          type="checkbox"
          id="isfriendly"
          name="isfriendly"
          checked={formData.isfriendly}
          onChange={handleChange}
        />
        <label htmlFor="isfriendly">It is Checked!</label>
        <br />
        <br />
        <fieldset>
          <legend>Current Employment Status</legend>
          <input
            type="radio"
            name="empolyment"
            id="unempolyee"
            value="Unempolyed"
            checked={formData.empolyment === "Unempolyed"}
            onChange={handleChange}
          />
          <label htmlFor="unempolyee"> Unempolyee</label> <br />
          <input
            type="radio"
            name="empolyment"
            id="Part-Time"
            value="Part-Time"
            checked={formData.empolyment === "Part-Time"}
            onChange={handleChange}
          />
          <label htmlFor="Part-Time"> Part-Time</label> <br />
          <input
            type="radio"
            name="empolyment"
            id="Full-Time"
            value="Full-Time"
            checked={formData.empolyment === "Full-Time"}
            onChange={handleChange}
          />
          <label htmlFor="Full-Time"> Full-Time</label> <br />
        </fieldset>
        <br />
        <label htmlFor="favColor">What is your favorite Color?</label>
        <br />
        <select
          id="favColor"
          value={formData.favcolor}
          name="favcolor"
          onChange={handleChange}
        >
          <option value="">---Choose---</option>
          <option value="Red">Red</option>
          <option value="Pink">Pink</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Black">Black</option>
          <option value="Oranege">Oranege</option>
        </select>
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Forms;

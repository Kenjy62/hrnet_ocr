// Components
import Button from "../Misc/Button";

// Required
import { useState } from "react";
import Voiler from "../Misc/Voiler";
import Modal from "../Misc/Modal";

export default function Form() {
  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [birthday, setBirthday] = useState();
  const [startdate, setStartdate] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [department, setDepartment] = useState();
  const [zipcode, setZipcode] = useState();
  const [street, setStreet] = useState();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(true ? false : true);
  };

  const addEmployee = async () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      startdate: startdate,
      department: department,
      birthdate: birthday,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode,
    };

    try {
      await fetch("http://localhost:3001/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          setModal(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {modal && (
        <Voiler>
          <Modal state={toggleModal}>Employee Created!</Modal>
        </Voiler>
      )}
      <form className="flex flex-col gap-2">
        <label>First Name</label>
        <input
          onChange={(e) => setFirstname(e.target.value)}
          className="border-black border"
          name="firstname"
          type="text"
        />
        <label>Last Name</label>
        <input
          onChange={(e) => setLastname(e.target.value)}
          className="border-black border"
          name="firstname"
          type="text"
        />
        <label>Date of Birth</label>
        <input
          onChange={(e) => setBirthday(e.target.value)}
          className="border-black border"
          name="firstname"
          type="date"
        />
        <label>Start Date</label>
        <input
          onChange={(e) => setStartdate(e.target.value)}
          className="border-black border"
          name="firstname"
          type="date"
        />
        <h1 className="font-bold">Adress</h1>
        <label>Street</label>
        <input
          onChange={(e) => setStreet(e.target.value)}
          className="border-black border"
          name="firstname"
          type="text"
        />
        <label>City</label>
        <input
          onChange={(e) => setCity(e.target.value)}
          className="border-black border"
          name="firstname"
          type="text"
        />
        <label>State</label>
        <select onChange={(e) => setState(e.target.value)}>
          {states.map((e, i) => {
            return (
              <option key={i} value={e.abbreviation}>
                {e.name}
              </option>
            );
          })}
        </select>
        <label>Zip Code</label>
        <input
          onChange={(e) => setZipcode(e.target.value)}
          className="border-black border"
          name="firstname"
          type="number"
        />
        <label>Department</label>
        <select onChange={(e) => setDepartment(e.target.value)}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
      </form>
      <div onClick={addEmployee}>
        <Button>Save</Button>
      </div>
    </>
  );
}

import React, {useCallback, useState, useEffect} from 'react';
import Search from './Components/Search';
import AddApointment from './Components/AddApointment';
import { BiCalendar } from 'react-icons/bi';

import AppointmentInfo from './Components/AppointmentInfo';
import Navbar from './Components/Navbar';

function App() {
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <Navbar />
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments</h1>
      <AddApointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList
          .map(appointment => (
            <AppointmentInfo key={appointment.id}
              appointment={appointment}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;

import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import moment from "moment";
import Modal from "../../components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { gotoPageDetails } from "../../routers/coordinators";

const ListPatients = () => {
  const { patients} = useContext(GlobalStateContext);
  const [searchName, setSearchName] = useState("");
  const [searchGender, setSearchGender] = useState("");
  const [searchNationality, setSearchNationality] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const navigate = useNavigate();
  const { name } = useParams();
  
  const clicked = (name) => {
    gotoPageDetails(navigate, name);
    setModalOn(true);
  };

  const onChangeName = (e) => {
    setSearchName(e.target.value);
  };

  const onChangeGender = (e) => {
    setSearchGender(e.target.value);
  };

  const onChangeNationality = (e) => {
    setSearchNationality(e.target.value);
  };

  return (
    <div className="mb-10">
      <Header />

      <form className="flex flex-row justify-around items-center flex-wrap m-10 flex-initial">
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-slate-400 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            class="text-blue-700 placeholder:italic placeholder:text-slate-400 block bg-white w-64 border border-slate-300 rounded-md 
            py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring-1"
            placeholder="Search for name..."
            type="text"
            name="search"
            onChange={onChangeName}
          />
        </label>

        <select
          className="text-blue-700 placeholder:italic placeholder:text-slate-400 block bg-white w-30 border border-slate-300 rounded-md 
             shadow-sm focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring-1"
          value={searchGender}
          onChange={onChangeGender}
        >
          <option className="text-left  text-slate-400" value="">
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
          
        </select>

        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-slate-400 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            class="text-blue-700 placeholder:italic placeholder:text-slate-400 block bg-white w-64 border border-slate-300 rounded-md 
            py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-700 focus:ring-blue-700 focus:ring-1"
            placeholder="Search for nationality..."
            type="text"
            name="search"
            onChange={onChangeNationality}
          />
        </label>
      </form>

      <table className="bg-blue-700 table-fixed border border-collapse mx-auto mt-11 w-3/4">
        <tr className="border">
          <th>Name</th>
          <th>Gender</th>
          <th>Birth</th>
          <th>Nationality</th>
          <th>Action</th>
        </tr>
      </table>
      {patients
        .filter((row) => {
          return row.name.first
            .toLowerCase()
            .includes(searchName.toLowerCase());
        })
        .filter((row) => {
          return row.location.country
            .toLowerCase()
            .includes(searchNationality.toLowerCase());
        })
        .filter((row) => {
          if (!searchGender) return row.gender;
          return row.gender === searchGender;
        })
        .map((row) => (
          <div key={row.id}>
            <table className="table-fixed mx-auto sm: w-3/4">
              <tr className="border">
                <td className="p-3 bg-slate-500 text-center	">
                  {row.name.first}
                </td>
                <td className="p-3 bg-slate-500 text-center	">{row.gender}</td>
                <td className="p-3 bg-slate-500 text-center	">
                  {moment(row.dob.date).format("DD/MM/YYYY")}
                </td>
                <td className="p-3 bg-slate-500 text-center	">
                  {row.location.country}
                </td>
                <td className="p-3 bg-slate-500 text-center	">
                  <button
                    className="underline cursor-pointer hover:text-blue-600"
                    onClick={() => clicked(row.name.first)}                    
                  >
                    Details
                  </button>
                  {modalOn && (
                    <Modal setModalOn={setModalOn} setChoice={setChoice} />
                  )}
                </td>
              </tr>
            </table>           
          </div>
        ))}            
    </div>
  );
};

export default ListPatients;

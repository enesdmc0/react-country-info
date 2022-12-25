import React,{useState, useEffect} from 'react';
import "./index.css";
import Select from 'react-select';
import CountryCard from './components/CountryCard';
function App() {
    const [countries, setCountries] = useState([]);
    const [selectValue, setSelectValue] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries(data);
        }

        fetchData();
    }, [])

    const options = countries.map((country) => {
        return {
            value: country?.altSpellings[1]?.toLowerCase(),
            label: country?.altSpellings[1]
        }
    })

    const handleChange = selectValue => {
        setSelectValue(selectValue);
        console.log(selectValue.value)
    };
  return (
    <div className="bg-world h-screen bg-center bg-cover flex items-center justify-center flex-col gap-2">
        <h1 className="text-white text-5xl text-center font-bold p-6 max-sm:text-4xl max-sm:p-3">country information</h1>
        <Select className="w-2/5 max-sm:w-3/4" placeholder="please select country..." options={options} value={selectValue} onChange={handleChange} />
        <CountryCard selectValue={selectValue.label} country={countries} />
    </div>
  );
}

export default App;

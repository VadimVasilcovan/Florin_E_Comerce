import React, {useState} from "react";
import './manufacturer-select.css'


function Manufacturer(){
     
    const [value, setValue] = useState('default'); // default value for the placeholder

    const changeSelect = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="manufacturer-container">
            <select className="select-element-manufacturer" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Manufacturer
                </option>
                <option value="Мышь">Мышь</option>
                <option value="Кот">Кот</option>
                <option value="Сыр">Сыр</option>
                <option value="Молоко">Молоко</option>
            </select>
            {/*<p>Выбрана опция: {value !== 'default' ? value : 'Нет выбора'}</p>*/}
        </div>
    );
}

export default Manufacturer;
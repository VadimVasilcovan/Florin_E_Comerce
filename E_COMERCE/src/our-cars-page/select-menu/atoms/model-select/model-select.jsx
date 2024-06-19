import React, {useState} from "react";
import './model-select.css'


function SelectModel(){
     
    const [value, setValue] = useState('default'); // default value for the placeholder

    const changeSelect = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="model-container">
            <select  className="select-element-model" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Model
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

export default SelectModel;
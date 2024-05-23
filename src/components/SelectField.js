import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFieldStatusOne, updateFieldStatusTwo, resetFieldStatus } from '../utils/fieldSlice';
import Table from './Table';

const SelectField = () => {
  const dispatch = useDispatch();
  const fieldDataOne = useSelector((store) => store.field.fieldDataOne);
  const fieldDataTwo = useSelector((store) => store.field.fieldDataTwo);
  const [selectFields, setSelectFields] = useState([{ id: Date.now(), selectedValue: '', selectedValueTwo: '' }]);
  const [showTable, setShowTable] = useState(false);

  const handleChange = (event, id, fieldKey) => {
    const selectedFieldValue = event.target.value;
    setSelectFields(selectFields.map(field =>
      field.id === id ? { ...field, [fieldKey]: selectedFieldValue } : field
    ));
    if (fieldKey === 'selectedValue') {
      dispatch(updateFieldStatusOne({ fieldName: selectedFieldValue, status: true }));
    } else if (fieldKey === 'selectedValueTwo') {
      dispatch(updateFieldStatusTwo({ fieldName: selectedFieldValue, status: true }));
    }
  };

  const addField = () => {
    setSelectFields([...selectFields, { id: Date.now(), selectedValue: '', selectedValueTwo: '' }]);
    // console.log("selectFields",selectFields);
    // selectFields.map((d)=>{
    //   // console.log(d.selectedValue);
    //   // console.log(d.selectedValueTwo);
    //   if(d.selectedValue && d.selectedValueTwo){
    //     setShowTable(true);
    //   }
    // })
  };

  const handleDeleteField = (id, selectedValue, selectedValueTwo) => {
    setSelectFields(selectFields.filter(field => field.id !== id));
    dispatch(resetFieldStatus({ selectedValue, selectedValueTwo }));
  };

  const showTableEvent = () => {
    let flag = false;
    // console.log(selectFields);
    // if(selectFields.length )
      selectFields.map((d)=>{
        // console.log(d.selectedValue);
        // console.log(d.selectedValueTwo);
        if((d.selectedValue && d.selectedValueTwo)){
          flag = true;
        }else{
          flag=false;
        }
      })
      setShowTable(flag);
    
  };

  return (
    <div>
      <div>
        {selectFields.map(field => (
          <div key={field.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <select
              id={`selectfield_${field.id}`}
              className="form-select"
              aria-label="Default select example"
              value={field.selectedValue}
              onChange={(event) => handleChange(event, field.id, 'selectedValue')}
            >
              <option value="" disabled>Select an option</option>
              {fieldDataOne.map((item, index) => (
                (!item.status || item.name === field.selectedValue) && (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                )
              ))}
            </select>
            <select
              id={`selectfieldTwo_${field.id}`}
              className="form-select"
              aria-label="Default select example"
              value={field.selectedValueTwo}
              onChange={(event) => handleChange(event, field.id, 'selectedValueTwo')}
            >
              <option value="" disabled>Select an option</option>
              {fieldDataTwo.map((item, index) => (
                (!item.status || item.name === field.selectedValueTwo) && (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                )
              ))}
            </select>
            <button onClick={() => handleDeleteField(field.id, field.selectedValue, field.selectedValueTwo)} style={{ marginLeft: '10px' }}>Delete</button>
          </div>
        ))}
        <button onClick={addField}>Add</button>
        <button onClick={showTableEvent}>Submit</button>
      </div>
      <div>
        {showTable && <Table data={selectFields} />}
      </div>
    </div>
  );
};

export default SelectField;

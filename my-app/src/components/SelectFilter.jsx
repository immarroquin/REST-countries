import React, {useRef} from "react";

const SelectFilter = (props) => {
  const { width, regions } = props;
  const regionRef = useRef(null);

  const handleChange = () => {
    // tomar valor del input
    let continent = regionRef.current.value 
    // se envia a componenete principal
    props.dataFilter(continent);
      };
  
  const unique = regions.filter((region, index) => regions.indexOf(region) === index); //filtrado de las regiones

  const populateSelect = () => {
    return unique.map((region, index) => { 
      let notNull = (region !== "" && region !== null); // verificar que la region no sea nula
      return (
        notNull && <option key={`continent_${index}`} className="option" value={region}>{region}</option> 
      )

    });
}
  

  return (
    <select
      onChange={handleChange}
      ref={regionRef}
      id="select-box"
      style={{ width: width + "px" }}
      className="select-box"
      name="region"
    >
      <option className="option" value="">
        Filter by Region
      </option>
      {populateSelect()}
    </select>
  );
};
export { SelectFilter };

import s from "./Filter.module.css"

const Filter = ({ value, onChange }) => (
   <label >
     <p className={s.FilterTitle}>Find contacts bu name</p>
    <input className={s.InputFilter} type="text" value={value} onChange={onChange}/>
  </label> 
 
    
)
    
export default Filter;
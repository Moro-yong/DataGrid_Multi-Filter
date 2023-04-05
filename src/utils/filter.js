const filter = ({inital, option}) => {  
  let result = [...inital]
  for(let key in option) {
    result = result.filter(item => item[key] === option[key])   
  }
  
  return result
}

export default filter
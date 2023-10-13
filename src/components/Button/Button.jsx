
const Button = ({num}) => {
  return (
    <div>
        <button onClick={()=>num(prev => prev+1)}>click</button>
    </div>
  )
}

export default Button
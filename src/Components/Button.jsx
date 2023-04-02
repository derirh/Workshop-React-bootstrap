function Button({color,title}){

     return<button className={`btn btn-${color} me-2`}>{title}</button>
}
export default Button;
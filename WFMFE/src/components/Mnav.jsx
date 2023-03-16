import "./mnav.css";
import logo from '../img/logo.png'
const Mnav = () => {
  return (
    <div className="mnav container-fluid">
        <div className="navbar container">
        <div className="logo"><img src={logo} /></div>
        <div className="search">
            <input type="text" />
            <div className="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div className="profile">
            <div className="bell">
            <i class="fa-solid fa-bell"></i>
            </div>
            <div className="avatar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU" alt="img" />
        </div>
        </div>
       
        </div>
    </div>
  );
};

export default Mnav;

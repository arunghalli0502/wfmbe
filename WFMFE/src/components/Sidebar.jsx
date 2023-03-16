import "./sidebar.css";

const Sidebar = ({merchantName}) => {
  console.log(merchantName);
  return (
    <div className="mainsidebar">
      <div className="inner">
      <div className="dashTitle">
      <i class="fa-brands fa-discord"></i>
        <h3 className="text-capitalize">{merchantName} <span className="dash">Dashboard</span></h3>
      </div>
        <ul>
            <li><i class="fa-solid fa-user"></i> Profile</li>
            <li><i class="fa-solid fa-car"></i> All Cars</li>
            <li><i class="fa-solid fa-arrow-trend-up"></i> Sale</li>
            <li><i class="fa-solid fa-truck-front"></i> Rent</li>
            <li><i class="fa-solid fa-gear"></i> Setting</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

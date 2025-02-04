import Switch from "@mui/material/Switch";
const Header = () => {
  const label = {
    color: "#fff",
    size: "small",
  };
  return (
    <>
      <div className="top-bar w-full flex items-center justify-between">
        <div className="left-side flex items-center">
          <div className="back cursor-pointer">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.25 7H1.75M1.75 7L7 12.25M1.75 7L7 1.75"
                stroke="#1F2A37"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="file-name ml-3">
            <span>Name of the file</span>
          </div>
        </div>
        <div className="right-side flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            <Switch {...label} defaultChecked />
            <span className="block save">Auto Save</span>
          </div>
          <div className="profile">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 15C4.00184 13.1419 6.38026 12 9 12C11.6197 12 13.9982 13.1419 15.75 15M12.375 5.625C12.375 7.48896 10.864 9 9 9C7.13604 9 5.625 7.48896 5.625 5.625C5.625 3.76104 7.13604 2.25 9 2.25C10.864 2.25 12.375 3.76104 12.375 5.625Z"
                stroke="#D03801"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

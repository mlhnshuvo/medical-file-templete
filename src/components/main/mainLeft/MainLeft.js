import React from "react";
import User from "../../../assets/images/user.png";
import ImageBadge from "../../../assets/images/ImageBadge.svg";
import cellPhone from "../../../assets/images/cellPhone.svg";
import France from "../../../assets/images/France.svg";
import email from "../../../assets/images/email.svg";
import location from "../../../assets/images/location.svg";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const MainLeft = () => {
  return (
    <div className="main-left">
      <img src={User} alt="" className="main-img" />
      <Typography variant="h6" className="main-user">
        Veronika Shmatko
        <img src={ImageBadge} alt="" className="main-img-badge" />
      </Typography>
      <p className="main-user-details">RPPS : SR947450</p>
      <p className="main-user-details">Patients Scince: 1st Jan, 2022</p>
      <div className="left-basicInfo">
        <p>Basic Info:</p>
        <div className="basic-info">
          <div className="basic-info-details">
            <img src={cellPhone} alt="" />
            <p className="basic-info-cellnumber">+880 3123 1233</p>
          </div>
          <div className="basic-info-details">
            <img src={France} alt="" />
            <p className="basic-info-france">France</p>
          </div>
        </div>
        <div className="basic-info">
          <div className="basic-info-details">
            <img src={email} alt="" />
            <p className="basic-info-cellnumber">your_email@mail.com</p>
          </div>
          <div className="basic-info-details">
            <img src={location} alt="" />
            <p className="basic-info-france">House No: 2bhk</p>
          </div>
        </div>

        <div className="basic-form-control">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Overview</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Overview"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="basic-form-control">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Patients Info</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Patients Info"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="basic-form-control basic-form-control-bg">
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="basic-form-control-txt"
            >
              All Test Reports
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="All Test Reports"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="basic-form-control">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">History</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="History"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="basic-form-control">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              All Prescription
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="All Prescription"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <p className="basic-form-btn">Ajouter un document</p>
      </div>
    </div>
  );
};

export default MainLeft;

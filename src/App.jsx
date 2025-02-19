import React from "react";

const ArrayImplementation = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Array Implementation</h1>
      <p>Welcome to my array implementation Deliverables</p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ borderCollapse: "collapse", width: "50%", margin: "20px auto" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Details</th>
              <th style={tableHeaderStyle}>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCellStyle}>Full Name</td>
              <td style={tableCellStyle}>Henry Ayobami Oderinde</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Email</td>
              <td style={tableCellStyle}>devodehenry.2000@gmail.com</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Track</td>
              <td style={tableCellStyle}>Frontend</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Stage</td>
              <td style={tableCellStyle}>
                Advance (I am just switching track to Advance. I was initially at <strong>Beginner</strong>)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      <h1>
        ** I just filled my form to switch to Advance Stage from Beginner. If I have not been switched, My Beginner
        Project is linked below. So You can click the button to view it **
      </h1>
      <button style={buttonStyle}>
        <a href="./index0.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          Click Here
        </a>
      </button>
    </div>
  );
};

const tableHeaderStyle = {
  border: "1px solid #000",
  padding: "8px",
  textAlign: "left",
  backgroundColor: "#f2f2f2",
};

const tableCellStyle = {
  border: "1px solid #000",
  padding: "8px",
  textAlign: "left",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

export default ArrayImplementation;

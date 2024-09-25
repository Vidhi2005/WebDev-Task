import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Avatar from "./Avatar";
import Chart from "./Chart";

function App() {
  const [Dashboard, setDashboard] = useState({
    aptitudeScore: 147,
    personalityType: "INT J",
    learningType: "Visual",
    completion: 45,
    accountType: "Student",
    careerOptions: ["Data Scientist", "Software developer", "AIML"],
  });

  return (
    <main className="main">
      <nav>
        <div className="navbar">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.58088 14.694L16.9446 14.694M16.9442 7.88848L1.38901 7.88848M16.9446 1.08292L10.1117 1.08292"
              stroke="#1B1D21"
              stroke-width="1.45833"
              stroke-linecap="round"
            />
          </svg>

          <h1>Counsel.ai</h1>
          <div className="items">
            <a>Dashboard</a>
            <a>Home</a>
            <a>Resources</a>
            <a>How this works</a>
            <a>About</a>
          </div>
        </div>
        <div className="setting-button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0834 15.5738H17.125M3.9028 10.2778L2.54169 10.3135M3.9028 10.2778C3.9028 11.3517 4.77335 12.2222 5.84724 12.2222C6.92113 12.2222 7.79169 11.3517 7.79169 10.2778C7.79169 9.20389 6.92113 8.33334 5.84724 8.33334C4.77335 8.33334 3.9028 9.20389 3.9028 10.2778ZM8.34989 10.3135H17.125M10.4823 5.05309L2.54169 5.05309M17.125 5.05309H15.0834M2.54169 15.5738H10.4823M14.5972 15.625C14.5972 16.6989 13.7267 17.5694 12.6528 17.5694C11.5789 17.5694 10.7084 16.6989 10.7084 15.625C10.7084 14.5511 11.5789 13.6806 12.6528 13.6806C13.7267 13.6806 14.5972 14.5511 14.5972 15.625ZM14.5972 4.93056C14.5972 6.00445 13.7267 6.875 12.6528 6.875C11.5789 6.875 10.7084 6.00445 10.7084 4.93056C10.7084 3.85667 11.5789 2.98611 12.6528 2.98611C13.7267 2.98611 14.5972 3.85667 14.5972 4.93056Z" stroke="white" stroke-width="1.45833" stroke-linecap="round"/>
</svg>



          <a>Setting</a>
        </div>
      </nav>
      <div className="content">
        <div className="header">
          <h1>Dashboard</h1>
          <div className="profile">
            <Avatar />

            <div className="profile-content">
              <h3>Student</h3>
              <p>Vansh</p>
            </div>
          </div>
        </div>

        <div className="acc">
          <a>Roadmap</a>
          <a className="active">My Data</a>
          <a>Edit Profile</a>
        </div>

        <div className="info">
          <div className="info-item">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.833344"
                y="0.555008"
                width="23.3333"
                height="23.3333"
                rx="7.77778"
                fill="#53D86A"
              />
              <path
                d="M6.59238 10.1792C7.02836 8.42343 8.42056 7.06589 10.1865 6.67459L10.4806 6.6094C11.8108 6.31467 13.1892 6.31467 14.5194 6.6094L14.8135 6.67459C16.5794 7.06589 17.9716 8.42343 18.4076 10.1792C18.7407 11.5205 18.7407 12.9229 18.4076 14.2642C17.9716 16.0199 16.5794 17.3775 14.8135 17.7688L14.5193 17.834C13.1892 18.1287 11.8108 18.1287 10.4806 17.834L10.1865 17.7688C8.42056 17.3775 7.02836 16.0199 6.59238 14.2642C6.25933 12.9229 6.25933 11.5205 6.59238 10.1792Z"
                stroke="#1B1D21"
                stroke-width="1.45833"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5001 8.98094C12.748 8.98094 12.9489 9.17019 12.9489 9.40365V9.74947H12.9986C13.833 9.74947 14.4444 10.4329 14.4444 11.1969C14.4444 11.4304 14.2435 11.6196 13.9957 11.6196C13.7479 11.6196 13.547 11.4304 13.547 11.1969C13.547 10.829 13.2655 10.5949 12.9986 10.5949H12.9489V11.9256L13.5547 12.1332C14.1053 12.3218 14.4444 12.8347 14.4444 13.3779C14.4444 14.0693 13.8903 14.6938 13.1265 14.6938H12.9489V15.0397C12.9489 15.2732 12.748 15.4624 12.5001 15.4624C12.2523 15.4624 12.0514 15.2732 12.0514 15.0397V14.6938H12.0014C11.1669 14.6938 10.5555 14.0104 10.5555 13.2464C10.5555 13.0129 10.7564 12.8237 11.0043 12.8237C11.2521 12.8237 11.453 13.0129 11.453 13.2464C11.453 13.6143 11.7345 13.8484 12.0014 13.8484H12.0514V12.5178L11.4453 12.3101C10.8947 12.1215 10.5555 11.6086 10.5555 11.0655C10.5555 10.374 11.1097 9.74947 11.8735 9.74947H12.0514V9.40365C12.0514 9.17019 12.2523 8.98094 12.5001 8.98094ZM12.0514 10.5949H11.8735C11.6772 10.5949 11.453 10.7702 11.453 11.0655C11.453 11.2912 11.5926 11.4611 11.752 11.5156L12.0514 11.6182V10.5949ZM12.9489 12.8252V13.8484H13.1265C13.3228 13.8484 13.547 13.6731 13.547 13.3779C13.547 13.1521 13.4073 12.9823 13.248 12.9277L12.9489 12.8252Z"
                fill="#1B1D21"
              />
            </svg>

            <p>Aptitude Score</p>
            <h3>{Dashboard.aptitudeScore}</h3>
          </div>
          <div className="info-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.444427"
                y="0.555008"
                width="23.3333"
                height="23.3333"
                rx="7.77778"
                fill="#FE9526"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.2296 13.5143C16.5049 13.5143 16.5049 10.8475 18.2296 10.8475C18.2296 7.75771 18.2296 6.65491 12.1402 6.65491C6.05087 6.65491 6.05087 7.75771 6.05087 10.8475C7.77559 10.8475 7.77559 13.5143 6.05087 13.5143C6.05087 16.6047 6.05087 17.7075 12.1402 17.7075C18.2296 17.7075 18.2296 16.6047 18.2296 13.5143Z"
                stroke="#1B1D21"
                stroke-width="1.45833"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1402 10.3885C11.6976 10.3885 11.6554 11.0947 11.3923 11.3446C11.1285 11.5939 10.3099 11.309 10.1958 11.7517C10.0824 12.195 10.8193 12.3454 10.9107 12.7255C11.0014 13.1056 10.5516 13.6398 10.936 13.9063C11.321 14.1716 11.7351 13.5704 12.1402 13.5704C12.5453 13.5704 12.9595 14.1716 13.3445 13.9063C13.7295 13.6398 13.279 13.1056 13.3698 12.7255C13.4612 12.3454 14.1981 12.195 14.0847 11.7517C13.9706 11.309 13.152 11.5939 12.8882 11.3446C12.6251 11.0947 12.5829 10.3885 12.1402 10.3885Z"
                stroke="#1B1D21"
                stroke-width="0.972222"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>personalityType</p>
            <h3>{Dashboard.personalityType}</h3>
          </div>
          <div className="info-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.0555496"
                y="0.555008"
                width="23.3333"
                height="23.3333"
                rx="7.77778"
                fill="#FFCB2F"
              />
              <path
                d="M11.7223 14.87V9.57333"
                stroke="#130F26"
                stroke-width="0.972222"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1541 12.4301C14.1541 12.4301 12.5156 14.8697 11.7222 14.8697C10.9289 14.8697 9.29297 12.4301 9.29297 12.4301"
                stroke="#130F26"
                stroke-width="0.972222"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.72694 12.2218C5.72694 16.718 7.22611 18.2172 11.7223 18.2172C16.2185 18.2172 17.7177 16.718 17.7177 12.2218C17.7177 7.72558 16.2185 6.22641 11.7223 6.22641C7.22611 6.22641 5.72694 7.72558 5.72694 12.2218Z"
                stroke="#130F26"
                stroke-width="1.45833"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>learningType</p>
            <h3>{Dashboard.learningType}</h3>
          </div>
          <div className="info-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.666656"
                y="0.555008"
                width="23.3333"
                height="23.3333"
                rx="7.77778"
                fill="#167FFC"
              />
              <path
                d="M6.12442 10.0954C6.57214 8.37852 7.94009 7.06503 9.65786 6.70259L9.9861 6.63334C11.5343 6.30669 13.1324 6.30669 14.6805 6.63334L15.0088 6.70259C16.7266 7.06503 18.0945 8.37852 18.5422 10.0954C18.9057 11.4891 18.9057 12.9543 18.5422 14.348C18.0945 16.0648 16.7266 17.3783 15.0088 17.7408L14.6805 17.81C13.1324 18.1367 11.5343 18.1367 9.9861 17.81L9.65786 17.7408C7.94009 17.3783 6.57214 16.0648 6.12442 14.348C5.76098 12.9543 5.76098 11.4891 6.12442 10.0954Z"
                stroke="#1B1D21"
                stroke-width="1.45833"
              />
              <path
                d="M8.44443 12.2217H9.74072L11.037 14.1661L13.6296 10.2772L14.9259 12.2217H16.2222"
                stroke="#1B1D21"
                stroke-width="0.972222"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>completion</p>
            <h3>{Dashboard.completion}</h3>
          </div>
          <div className="info-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.277771"
                y="0.555008"
                width="23.3333"
                height="23.3333"
                rx="7.77778"
                fill="#FD3D39"
              />
              <path
                d="M13.4962 10.6631L10.3903 13.769"
                stroke="#1B1D21"
                stroke-width="0.972222"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 13.7725L10.3889 10.6614"
                stroke="#1B1D21"
                stroke-width="0.972222"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.94907 12.2218C5.94907 16.718 7.44823 18.2172 11.9444 18.2172C16.4406 18.2172 17.9398 16.718 17.9398 12.2218C17.9398 7.72558 16.4406 6.22641 11.9444 6.22641C7.44823 6.22641 5.94907 7.72558 5.94907 12.2218Z"
                stroke="#1B1D21"
                stroke-width="1.45833"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>accountType</p>
            <h3>{Dashboard.accountType}</h3>
          </div>
        </div>

        <div className="data-side">
          <Chart />
          <div className="career">
            {Dashboard.careerOptions.map((e, i) => (
              <p key={i}>{e}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

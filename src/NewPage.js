import React, { useState } from 'react';
import './NewPage.css'; // Import the CSS file

const NewPage = () => {
  // Array of GIF URLs
  const gifs = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTd6MTkwM3Ztb2dwd3ZqOXBxMWZqYmtvNmd4eWNkdGgxZjRqMWxzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kaZFhcd6cdrje3A5sU/giphy.gif",
    "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
    "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc245anRyYjRobDN0dXZqaWM2b2NnOGp3c3NxcG1rOWxsb3d5eW04bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u458Fo50SS1K3kqVyK/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBtajNyaDRseGRtNTFhMzY0dHN2MW0ycHBqNXZvOWpjdXNmZHo4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/menw2PSZ2vUzu/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmU5eWdkZDV1Nmp0MnFqdXowbmRiZTMzcmtlNWcxd2djYzhlM3hjMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fdS8al30MFz8Z2416E/giphy.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    "https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif",
    "https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
    "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
    "https://media.giphy.com/media/l4FGEpZw5vFST8vDi/giphy.gif",
    "https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif",
    "https://media.giphy.com/media/3o7TKKlj7BTQGna32o/giphy.gif",
    "https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif",
    "https://media.giphy.com/media/26AHqZycSplGWWPAI/giphy.gif",
    "https://media.giphy.com/media/3ohzdKvLT1DxFxhZAI/giphy.gif", 
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTdnMWN0cTBxbjg5MG04NnpldHBuY2NpbHFwdWtscmJscXljbWd2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12a3cXp4zXY1xe/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnRtcTdleDdzanBxdWppa2N3ZGN2ZmFoMjQ1anI3YmRzcmF2bHNsbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46Coblu8EE8Z8QYo/giphy.gif"
  ];

  // State to store the current GIF URL
  const [currentGif, setCurrentGif] = useState(gifs[0]);

  // Function to get a random GIF URL
  const getRandomGif = () => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    return gifs[randomIndex];
  };

  // Handler to change the GIF
  const handleChangeGif = () => {
    setCurrentGif(getRandomGif());
  };

  return (
    <div className="new-page">
      <h1>Is it a Potato?</h1>
      <p>It's a whole new Potato world!</p>
      <img src={currentGif} alt="Potato GIF" className="gif-image" />
      <button onClick={handleChangeGif} className="change-gif-button">New Potato</button>
    </div>
  );
};

export default NewPage;

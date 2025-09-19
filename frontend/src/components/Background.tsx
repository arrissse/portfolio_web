// TODO: ПЕРЕНЕСТИ В ВСПОМОГАТЕЛЬНЫЙ ФАЙЛ
function Stars() {
  // TODO: ПЕРЕНЕСТИ В ФАЙЛ С КОНСТАНТАМИ
  const smallStars = [
    { top: "3.4vh", left: "26.6vw" },
    { top: "5.9vh", left: "50vw" },
    { top: "19.2vh", left: "73vw" },
    { top: "4.4vh", left: "89.4vw" },
    { top: "19.2vh", left: "73.1vw" },
    { top: "46.1vh", left: "11.6vw" },
    { top: "56.2vh", left: "68.2vw" },
    { top: "61vh", left: "85.3vw" },
    { top: "86.3vh", left: "6.1vw" },
    { top: "81vh", left: "34.1vw" },
    { top: "84.4vh", left: "63.1vw" },
    { top: "87.3vh", left: "92.2vw" },
  ];

  const averageStars = [
    { top: "21vh", left: "15.9vw" },
    { top: "1.76vh", left: "45.3vw" },
    { top: "34.7vh", left: "83.3vw" },
    { top: "58.9vh", left: "26.6vw" },
    { top: "78.8vh", left: "73.9vw" },
  ];

  const bigStars = [
    { top: "7.3vh", left: "7.2vw" },
    { top: "4.5vh", left: "69.6vw" },
    { top: "76.1vh", left: "17.2vw" },
    { top: "60.1vh", left: "75.8vw" },
  ];

  return (
    <>
      {smallStars.map((pos, i) => (
        <div
          key={i}
          className="star small"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      {averageStars.map((pos, i) => (
        <div
          key={smallStars.length + i}
          className="star average"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}

      {bigStars.map((pos, i) => (
        <div
          key={smallStars.length + averageStars.length + i}
          className="star big"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}
    </>
  );
}

function Background() {
  return (
    <div className="background">
      <Stars></Stars>
    </div>
  );
}

export default Background;

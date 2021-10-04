const ChapterProgress = () => {
  const percentage = Math.floor(Math.random() * 100 + 1) / 100;
  const percentageString = Math.floor(percentage * 100);
  const circle2 = {
    stroke: '#0290ff',
    strokeDasharray: '251',
    strokeDashoffset: `calc(251 * (1 - ${percentage}))`,
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="percentageCircleContainer">
        <svg className="percentageCircle">
          <circle className="circle1" cx="40" cy="40" r="40" />
          <circle style={circle2} cx="40" cy="40" r="40" />
        </svg>
      </div>
      <div>
        <p className="fontStyle8 fontColor1">
          {percentageString}
          %
        </p>
        <p className="fontStyle5 fontColor1 normal">Completed</p>
      </div>
    </div>
  );
};

export default ChapterProgress;

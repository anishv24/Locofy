import FrameHeader from "../components/FrameHeader";
import WhatisXYZToolFrame1 from "../components/WhatisXYZToolFrame1";
import WhatIsXYZToolFrame from "../components/WhatIsXYZToolFrame";
import InputFieldRectangle from "../components/InputFieldRectangle";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <div className="rectangle-shape" />
      <main className="frame-component">
        <FrameHeader />
        <div className="no-history-message">
          <WhatisXYZToolFrame1 />
          <WhatIsXYZToolFrame />
        </div>
        <div className="welcome-rectangle">
          <div className="welcome-rectangle-child" />
          <InputFieldRectangle />
        </div>
      </main>
      <div className="hi-anishv-rawal">Hi Anishv Rawal!!</div>
      <div className="which-service-do">
        Which Service do you want to know about?
      </div>
    </div>
  );
};

export default Desktop;

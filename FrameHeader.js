import "./FrameHeader.css";

const FrameHeader = () => {
  return (
    <div className="frame-header">
      <div className="x-y-z-bank-label">
        <div className="line-separator">
          <h3 className="xyz-bank">
            <p className="xyz">XYZ</p>
            <p className="bank">Bank</p>
          </h3>
          <div className="search-field">
            <div className="a-b-c-button" />
          </div>
        </div>
      </div>
      <div className="user-history-frame">
        <nav className="frame-group">
          <div className="frames-set-a-b-c">
            <div className="abc-wrapper">
              <div className="abc">ABC</div>
            </div>
          </div>
          <div className="frames-set-a-b-c1">
            <div className="abc1">ABC</div>
          </div>
          <div className="frames-set-a-b-c2">
            <div className="abc-container">
              <div className="abc2">ABC</div>
            </div>
          </div>
          <div className="frames-set-a-b-c3">
            <div className="abc3">ABC</div>
          </div>
        </nav>
      </div>
      <div className="x-y-z-tool-icon">
        <div className="frame-question">
          <div className="ellipse-shape" />
        </div>
        <div className="anishv">Anishv</div>
      </div>
    </div>
  );
};

export default FrameHeader;

import "./WhatisXYZToolFrame1.css";

const WhatisXYZToolFrame1 = () => {
  return (
    <div className="whatis-x-y-z-tool-frame">
      <div className="whatis-x-y-z-tool-frame-child" />
      <div className="search-result-frame">
        <div className="a-b-c-frame">
          <div className="tool-tip-frame">
            <div className="vector-frame">
              <img
                className="vector-frame-child"
                loading="eager"
                alt=""
                src="/rectangle-9.svg"
              />
              <b className="user-history">User History</b>
            </div>
          </div>
          <div className="chevron-bottom-frame">
            <img className="nav-label-icon" loading="eager" alt="" />
            <div className="search-chat-history-frame">
              <img className="icon-plus" alt="" src="/-icon-plus.svg" />
              <div className="new-chat">New Chat</div>
            </div>
          </div>
          <div className="no-history-found-frame">
            <div className="nav-link">
              <img
                className="icon-magnifying-glass"
                loading="eager"
                alt=""
                src="/-icon-magnifying-glass.svg"
              />
              <div className="search-chat-history">Search Chat History</div>
            </div>
          </div>
        </div>
      </div>
      <div className="no-history-found">No History Found</div>
    </div>
  );
};

export default WhatisXYZToolFrame1;

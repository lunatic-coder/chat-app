import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItem = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-item-center">
        <h3 className="text-disappear"> room name </h3>
        <TimeAgo datetime={new Date()} className="font-normal text-black-45" />
      </div>

      <div className="d-flex align-items-center text-black-70">
        <spna>No message yet...</spna>
      </div>
    </div>
  );
};

export default RoomItem;

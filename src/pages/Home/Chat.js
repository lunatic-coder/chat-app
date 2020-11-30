import React from 'react';
import { useParams } from 'react-router';
import { Loader } from 'rsuite';

import ChatTop from '../../components/chat-window/top';
import ChatBottom from '../../components/chat-window/bottom';
import Messages from '../../components/chat-window/messages';
import { useRooms } from '../../context/rooms.context';
import { currentRoomProvider } from '../../context/current-room.context';

const Chat = () => {
  const { chatId } = useParams();

  const rooms = useRooms();

  if (!rooms) {
    return <Loader center vertical size="md" content="Loading" speed="slow" />;
  }

  const currentRoom = rooms.find(room => room.id === chatId);

  if (!currentRoom) {
    return <h6 className="text-center at-apge"> chat {chatId} not found </h6>;
  }

  const { name, description } = currentRoom;

  const currentRoomData = {
    name,
    description,
  };

  return (
    <currentRoomProvider data={currentRoomData}>
      <div className="chat-top">
        <ChatTop />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>

      <div chat-bottom>
        <ChatBottom />
      </div>
    </currentRoomProvider>
  );
};

export default Chat;

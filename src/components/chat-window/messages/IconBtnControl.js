import React from 'react';
import { Badge, Icon, IconButton, Tooltip, Whisper } from 'rsuite';

const ConditionalBedge = ({ condition, children }) => {
  return condition ? <Badge content={condition}>{children}</Badge> : children;
};

const IconBtnControl = ({
  isVisible,
  iconName,
  tooltip,
  onClick,
  badgeContent,
  ...Props
}) => {
  return (
    <div
      className="ml-2"
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      <ConditionalBedge conditon={badgeContent}>
        <Whisper
          placement="top"
          delay={0}
          delayShow={0}
          delayHide={0}
          trigger="hover"
          speaker={<Tooltip>{tooltip}</Tooltip>}
        >
          <IconButton
            {...Props}
            onClick={onClick}
            circle
            size="xs"
            icon={<Icon icon={iconName} />}
          />
        </Whisper>
      </ConditionalBedge>
    </div>
  );
};

export default IconBtnControl;

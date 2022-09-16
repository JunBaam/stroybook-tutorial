import React, { useCallback, useState } from "react";
// import classNames from "src/utils/ClassName";

const ReactionButton = ({ buttons: { label, isActive, count } }) => {
  const [clickCount, setClickCount] = useState(count);
  const [isButtonActive, setIsButtonActive] = useState(isActive);

  const onClickButton = useCallback(() => {
    isButtonActive
      ? setClickCount(clickCount - 1)
      : setClickCount(clickCount + 1);

    setIsButtonActive((prev) => !prev);
  }, [clickCount, isButtonActive]);

  return (
    <button
      type="button"
      // className={classNames(
      //   isButtonActive ? 'bg-gray-100' : 'bg-neutral-700',
      //   'rounded-2xl px-2 py-1 text-sm'
      // )}
      onClick={onClickButton}
    >
      {label} {clickCount}
    </button>
  );
};

export default ReactionButton;

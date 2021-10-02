import React from "react";
import { Button } from "native-base";

function UI() {
  const clickHandler = (e) => {
    console.log("User Relationship Create Button");
  };

  return (
    <Button
      _text={{ color: "white", fontSize: "14", fontWeight: "600" }}
      p="2"
      rounded="8"
      w="100%"
      bgColor="green.500"
      onPress={clickHandler}
    >
      Thêm bạn bè
    </Button>
  );
}
export default UI;

// A và B chưa kết bạn với nhau, A gửi lời mời kết bạn cho B, hoặc ngược lại
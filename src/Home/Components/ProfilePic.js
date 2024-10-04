import React from "react";

function ProfilePic() {
  const style = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "50%",
    padding: "0px",
  };

  return (
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10">
        <img
          src={require("../../Files/imgs/KazimAbrarMahi.jpg")}
          class="img-fluid"
          alt="Kazim Abrar Mahi"
          style={style}
        ></img>
      </div>
    </div>
  );
}

export default ProfilePic;

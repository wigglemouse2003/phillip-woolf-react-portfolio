import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex
        voluptatem voluptatum ab maiores sit beatae, corporis deleniti voluptate
        modi expedita dolore deserunt quidem nesciunt molestiae fuga odio quam.
        Voluptatibus esse accusantium quo, impedit tempore minima quidem fugit,
        laborum eaque, explicabo sunt suscipit nostrum blanditiis delectus
        nobis? Rem laboriosam ut doloribus amet fugit impedit, neque est vel
        doloremque ab. Veritatis ab commodi nesciunt quaerat, minus
        exercitationem delectus suscipit enim. Ad illum placeat fugiat accusamus
        eveniet? Laborum, quo? Quidem maxime, dicta necessitatibus veniam et
        consequatur numquam excepturi similique alias voluptatibus adipisci
        commodi quaerat doloremque nihil neque error quisquam odit. Dicta
        expedita, blanditiis, deleniti quae repellat eum aperiam doloribus
        similique saepe veritatis fugiat ea, mollitia ducimus magnam labore
        facere earum! Quo ex eaque eos illo! Corporis, rem quod quas veritatis
        odit quaerat, esse numquam fuga suscipit tempora earum officiis laborum!
        Quaerat beatae voluptas tempore quibusdam. Est, natus. Possimus sequi
        libero aut tenetur voluptate provident? Velit architecto obcaecati
        nesciunt perferendis consequuntur delectus ab dolor eligendi quaerat.
      </div>
    </div>
  );
}

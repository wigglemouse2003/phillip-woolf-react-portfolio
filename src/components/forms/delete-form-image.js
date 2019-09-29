import React from "react";
import axios from "axios";

const DeleteImage = props => {
  axios({
    method: props.action,
    url: props.url,
    data: props.buildForm(),
    withCredentials: true
  })
    .then(response => {
      // this.props.handleFeaturedImageDelete();

      if (props.imageType) {
        props.setState({
          [`${props.imageType}_url`]: ""
        });
      }
    })
    .catch(error => {
      console.log("deleteImage error", error);
    });
};

export default DeleteImage;

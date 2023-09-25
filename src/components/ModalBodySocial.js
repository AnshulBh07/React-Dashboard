const ModalBodySocial = (props) => {
  return (
    <form className="body">
      <div className="subHeading">
        <div className="basic">
          <p>Basic</p>
          <hr style={props.basicStyles} />
        </div>
        <div className="contact">
          <p>Contact</p>
          <hr style={props.socialStyles} />
        </div>
      </div>
      <div className="input__field">
        <p>
          Instagram Link<span> (Optional)</span>
        </p>
        <input
          type="text"
          placeholder="Eg. ..instagram.com/username"
          name="instaLink"
          value={props.users.instaLink}
          onChange={props.updateFunction}
        />
      </div>

      <div className="input__field">
        <p>
          Youtube Link<span> (Optional)</span>
        </p>
        <input
          type="text"
          placeholder="Eg. ...youtube/username"
          name="youtubeLink"
          value={props.users.youtubeLink}
          onChange={props.updateFunction}
        />
      </div>
    </form>
  );
};
export default ModalBodySocial;

const ModalBodyBasic = (props) => {
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
        <p>Enter Name*</p>
        <input
          type="text"
          placeholder="Eg. John Doe"
          name="name"
          value={props.users.name}
          onChange={props.updateFunction}
        />
      </div>

      <div className="input__field">
        <p>Enter Email*</p>
        <input
          type="email"
          placeholder="Eg. John@xyz.com"
          name="email"
          value={props.users.email}
          onChange={props.updateFunction}
        />
      </div>

      <div className="input__field">
        <p>Enter Password*</p>
        <input
          type="password"
          placeholder="Eg. 9987124562"
          name="password"
          value={props.users.password}
          onChange={props.updateFunction}
        />
      </div>
    </form>
  );
};
export default ModalBodyBasic;

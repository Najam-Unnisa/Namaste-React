import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userInfo: {
        login: "dummy",
        id: "id",
        avatar_url:" default",
      },
    };

     console.log(this.props.login +"child constructor");
  }

  async componentDidMount() {
     console.log(this.props.login+"child component did mount ");
    const data = await fetch("https://api.github.com/users/Najam-Unnisa");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  render() {
     console.log(this.props.login +"child render");

    const { login, id, avatar_url } = this.state.userInfo;

    return (
      <div className="user-cards">
        <img src={avatar_url} />
        <h2>Login: {login}</h2>
        <h3>id :{id}</h3>
        <h4>Contact : najmaunnisa00@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

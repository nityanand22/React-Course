import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.name + " constructor");
    this.state = {
      count1: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nityanand22");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // this will be called when compnent will changed by componentDidMount
    console.log("component did update");
  }

  componentWillUnmount() {
    // this will be called when we move from this page to another page
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const { count1 } = this.state;

    // console.log(this.props.name + " render");
    return (
      <div className="user-card">
        <img src={avatar_url} height={100} width={100} />
        <p>Count : {count1}</p>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          CLick Me
        </button>

        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : nityanandv9795@mail.dev</h4>
      </div>
    );
  }
}

export default UserClass;

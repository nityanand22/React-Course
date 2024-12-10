import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    // called in the last
    // used for make api call in class based component  because in the functional component there is useEffect for calling api
  }

  render() {
    const { name } = this.props;
    const { count1, count2 } = this.state;

    return (
      <div className="user-card">
        <p>Count : {count1}</p>
        <p>Count : {count2}</p>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          CLick Me
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {this.props.location}</h3>
        <h4>Contact : nityanandv9795@mail.dev</h4>
      </div>
    );
  }
}

export default UserClass;

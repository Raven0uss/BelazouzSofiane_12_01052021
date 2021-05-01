import React from "react";
import { getUser, userId } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      user: null,
    };
  }

  async componentDidMount() {
    const { data, error } = await getUser(userId);

    this.setState({
      loading: false,
      error: error ?? false,
      user: data ? data.data : null,
    });
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    if (this.state.error) return <div>An error occured</div>;
    return (
      <div>
        <div>Bonjour, {this.state.user.userInfos.firstName} !</div>
      </div>
    );
  }
}

export default App;

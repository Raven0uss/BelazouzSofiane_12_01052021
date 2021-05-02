import React from "react";
import {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  userId,
} from "./api";
import ActivityChart from "./components/ActivityChart";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      user: null,
      activity: null,
      averageSessions: null,
      performance: null,
    };
  }

  async componentDidMount() {
    const { data: user, error: errorUser } = await getUser(userId);
    const { data: activity, error: errorActivity } = await getUserActivity(
      userId
    );
    const {
      data: averageSessions,
      error: errorAverageSessions,
    } = await getUserAverageSessions(userId);
    const {
      data: performance,
      error: errorPerformance,
    } = await getUserPerformance(userId);

    const error =
      (errorUser ?? false) &&
      (errorActivity ?? false) &&
      (errorAverageSessions ?? false) &&
      (errorPerformance ?? false);

    this.setState({
      loading: false,
      error,
      user: user ? user.data : null,
      activity: activity ? activity.data : null,
      averageSessions: averageSessions ? averageSessions.data : null,
      performance: performance ? performance.data : null,
    });
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    if (this.state.error) return <div>An error occured</div>;
    console.log(this.state);
    return (
      <div id="profile-container">
        <div>
          <div className="greetings-message">
            Bonjour,{" "}
            <span className="greetings-firstname">
              {this.state.user.userInfos.firstName}
            </span>
          </div>
          <p className="congrats-message">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div
          style={{
            height: "100%",
          }}
        >
          <div className="charts-container">
            <div className="charts-activity-container">
              <ActivityChart data={this.state.activity.sessions} />
            </div>
            <div className="charts-b"></div>
            <div className="charts-c">
            </div>
            <div className="charts-d"></div>
            <div className="charts-e"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

import React from "react";
import {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  userId,
} from "./api";
import ActivityChart from "./components/ActivityChart";
import CountersSummary from "./components/CountersSummary";
import PerformanceChart from "./components/PerformanceChart";
import ScoreChart from "./components/ScoreChart";
import SessionsChart from "./components/SessionsChart";

/**
 * Profile Page
 * @date 2021-06-11
 * @returns {Component} - JSX React Component
 */
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

  // Fetching the data for the Profile page
  async componentDidMount() {
    const { data: user, error: errorUser } = await getUser(userId);
    const { data: activity, error: errorActivity } = await getUserActivity(
      userId
    );
    const { data: averageSessions, error: errorAverageSessions } =
      await getUserAverageSessions(userId);
    const { data: performance, error: errorPerformance } =
      await getUserPerformance(userId);

    // Check errors provided by API
    const error =
      (errorUser ?? false) &&
      (errorActivity ?? false) &&
      (errorAverageSessions ?? false) &&
      (errorPerformance ?? false);

    console.log(user);
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

        <div className="charts-block-container">
          <div className="charts-container">
            <div className="charts-activity-container">
              <ActivityChart data={this.state.activity.sessions} />
            </div>
            <div className="charts-b">
              <SessionsChart sessions={this.state.averageSessions.sessions} />
            </div>
            <div className="charts-c">
              <PerformanceChart performances={this.state.performance} />
            </div>
            <div className="charts-d">
              <ScoreChart scorePercentage={this.state.user.todayScore} />
            </div>
            <div className="charts-e">
              <CountersSummary data={this.state.user.keyData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

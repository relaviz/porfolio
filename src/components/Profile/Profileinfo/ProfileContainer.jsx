import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile';
import { getProfile } from '../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
  
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11772;
    }
    this.props.getProfile(userId)
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProsp = (state) => ({
  profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProsp, { getProfile })(WithUrlDataContainerComponent);
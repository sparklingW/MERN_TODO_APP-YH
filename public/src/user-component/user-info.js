import React, {Component, lazy, Suspense} from 'react';
import {onUserInfo, onUserLogOut} from '../actions/users';
import {connect} from "react-redux";
import {
	UserInfo,
	Wrapper,
	ContentWrapper,
	Placeholder
} from '../styled-components/user-info';
const User = lazy(() => import("./holders/user-info"));

class Info extends Component {
	componentDidMount() {
			this.props.onInfo(this.props.info);
	}

	render() {
		const { name, email } = this.props.info;
		console.log(this.props.info);
			return (
				<Wrapper>
					<ContentWrapper>
					<Suspense fallback={<Placeholder>Loading profile</Placeholder>}>
						<UserInfo>
							<User 
								name={name}
								email={email}
								length={this.props.events.length}
							/>
						</UserInfo>
						</Suspense>
					</ContentWrapper>
				</Wrapper>
			)
	}
}

const mapStateToProps = state => ({
	info: state.newUserReducer,
	events: state.evenstReducer.events,
});

const mapDispatchToProps = dispatch => ({
	onLogout: () => dispatch(onUserLogOut()),
	onInfo: (info) => dispatch(onUserInfo(info))
});

export default connect(mapStateToProps,mapDispatchToProps)(Info)
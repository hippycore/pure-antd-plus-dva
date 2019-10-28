import React from "react";
import {Layout,Icon, Card } from "antd";
import SideNav from './components/Sidenav';

const { Header, Content, Sider } = Layout;

class AppLayout extends React.Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout style={{minHeight:"100vh"}}>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="sidenav-logo" />
					<SideNav/>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>
						<Card>
							<Icon
								className="sidenav-burger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggle}
							/>
						</Card>
					</Header>
					<Content>
						<Card>
							{this.props.children}
						</Card>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default AppLayout;

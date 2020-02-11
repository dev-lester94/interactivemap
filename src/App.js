import React, { Component } from "react";
import {Layout, Menu, Icon} from "antd";
import './css/app.css';
import './map';
import WrappedMap from "./map";

//const { Layout, Menu, Breadcrumb, Icon } = antd;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {

  constructor(props) {
    super(props);
    console.log('app props', props)
    this.state = {
      collapsed: false,
      visible: false,
      showDirections: false,
      originState: '',
      destState: '',
    };
    // this.setDirections = this.setDirections.bind(this);
  }

  // state = {
  //   collapsed: false,
  //   visible: false,
  //   showDirections: false,
  //   originState: 'aaa',
  //   destState: '',
  // };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  showDrawer = () => {
    this.setState({visible: true});
  };

  onClose =()=>{
    this.setState({visible:false});
  };

  showDirections = () => {
    console.log('change to showDirections')
    this.setState({showDirections: true});
  };

  setDirections =(origin, dest)=>{
    // console.log('original directions')
    // console.log(this.state.originState)
    // console.log(this.state.destState)
    // console.log('passed in origin:', origin)
    // console.log('passed in dest:', typeof dest, dest)
    this.setState({originState: origin},);
    this.setState({destState: dest});
    // console.log('new directions')
    // console.log(this.state.originState)
    // console.log(this.state.destState)
  };

  // onCancel =()=>{
  //   this.setState({showDirections:false});
  // };

  render() {
    // console.log('showDirections',this.state.showDirections);
    //return <div>I'M READY TO USE THE BACK END APIS! :-)</div>;
    // console.log('new directions in rerender')
    // console.log(this.state.originState)
    // console.log(this.state.destState)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header className= "header">
          <img src={require('./css/logo_sjsu.png')} style={{width:'120px',height:'120px'}}alt= "SJSU"></img>
          <img src={require('./css/logo2_sjsu.png')} style={{width:'400px',height:'100px'}} alt= "SJSU"></img>
        </Header>
        <Layout>
          <Sider theme="light" width ="250" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo"/>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <span>Services</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="car" />
                  <span>Parking</span>
                </span>
              }
            >
              <Menu.Item key="2">North Parking Garage</Menu.Item>
              <Menu.Item key="3">South Parking Garage</Menu.Item>
              <Menu.Item key="4">West Parking Garage</Menu.Item>
              <Menu.Item key="5">Park & Ride Lot</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="wallet" />
                  <span>Food & Drinks</span>
                </span>
              }
            >
              {/* <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item> */}
            </SubMenu>
            <SubMenu key="sub3"
              title={
                <span>
                  <Icon type="printer" />
                  <span>Printers</span>
                </span>
              }>
            </SubMenu>
          </Menu>
          <div id="panel"></div>
        </Sider>
          <Content style={{ margin: '0 16px' }}>
            <div className="links">
              <a href={"https://www.sjsu.edu"} target={"_blank"}> SJSU Home |</a>
              <a href={"/"}> ICMap Home </a>
            </div>
            {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
            <WrappedMap
                googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=AIzaSyAMfYya8nMS02owOTeCWc5o-Z38v9spo9g`}
                loadingElement={ <div style={{ height: `100%` }} />}
                containerElement={ <div style={{ height: `100%` }} />}
                mapElement={ <div style={{ height: `100%` }} />}
                closeDrawer={this.onClose}
                openDrawer={this.showDrawer}
                currentDrawerState={this.state.visible}
                currentDirectionsState={this.state.showDirections}
                showDirections={this.showDirections}
                originState={this.state.originState}
                destState={this.state.destState}
                setDirections={this.setDirections}
              />
            <Footer style={{ textAlign: 'center' }}>SJSU Interactive Campus Map ©2019 Created by ICMap</Footer>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>SJSU Interactive Campus Map ©2019 Created by ICMap</Footer> */}
        </Layout>
          <Footer style={{ textAlign: 'center' }}>SJSU Interactive Campus Map ©2019 Created by ICMap</Footer>
      </Layout>
      //   <Footer style={{ textAlign: 'center' }}>SJSU Interactive Campus Map ©2019 Created by ICMap</Footer>

      // </Layout>
    );
  }
  
}

export default App;
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import servicesData from '../sampledata/data.json'
const { Sider } = Layout;
const { SubMenu } = Menu;

let mapServices = [];

export default class ServiceSider extends React.Component {

  state = {
    services: []
  };

  
  componentDidMount(){

    servicesData.forEach(service=>{
    
        mapServices.push(
          <SubMenu
            key={service.subMenu.key}
            title={
              <span>
                <Icon type={service.subMenu.icon} />
                <span>{service.subMenu.name} </span>
              </span>
            }
          >
          
          {
            service.menuItems.map(menuItem =>{
              return(
                <Menu.Item key={menuItem.key} onClick={() => this.props.clickService(menuItem.buildingName)}>{menuItem.buildingName}</Menu.Item>
              )
            })
          }
  
          </SubMenu>

        ) 
    })
    

    this.setState({
      services: mapServices
    });


  }


  render() {
   

    //console.log(this.state.services[0])
    return (
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          left: 0
        }}
        breakpoint="md"
        theme='light'
        width='250'
        collapsible='true'

      >
      
      <div className='logo' />
      <Menu theme='light' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1'>
            <span><Icon type='menu' />
            <span>Explore Services</span></span>
            
          </Menu.Item>

          {this.state.services}

        
      </Menu>
      </Sider>
    )
  }
}

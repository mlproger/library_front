import axios from "axios"
import { Children, useState } from 'react';
import { useEffect } from "react"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

// const items = [
//     {
//       label: 'Navigation One',
//       key: 'mail',
//       icon: <MailOutlined />,
//     },
//   ];

// const [current, setCurrent] = useState('mail');
const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };



function UsersCard() {

    const [users, set_users] = useState([])

    const get_users = () => {
        axios.get("http://localhost:8000/api/v1/users/").then(value => {
            const data = value.data.map(c => {
                return {label: c["id"], children: [
                    {
                        label: c["user_name"]
                    },
                    {
                        label: c["books"] && c["books"].lenght > 0 ? c["books"] : "Нет книг"
                    }
                ]
                }
            })
        console.log(data)
        set_users(data)
        })
        
    }
    
      useEffect(
        () => {
            get_users()
        }, []
      )

    return (
        <Menu
            onClick={onClick}
            style={{
                width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={users}
        />
    )
  }
  

export default UsersCard
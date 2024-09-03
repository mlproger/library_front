import { Card } from 'antd';
import { useState } from 'react';
import { useEffect } from "react"
import axios from "axios"

function UserCard() {

    const [user_data, set_user_name] = useState([])
    
      useEffect(
        () => {
            axios.get("http://localhost:8000/api/v1/users/Максим/").then(value => {
                const data = [value.data["id"],value.data["user_name"], value.data["books"]]
                set_user_name(data)
            })
        }
      )

    return (
        <Card
            title="Карточка пользователя"
            style={{
                width: 300,
            }}
        >
        <p>ID: {user_data[0]}</p>
        <p>Имя: {user_data[1]}</p>
        <p>Книги: {user_data[2]}</p>
        </Card>
    )
  }
  

export default UserCard
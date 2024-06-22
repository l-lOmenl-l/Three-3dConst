import React from 'react'
import axios from 'axios'
import IUser from '../../../entities/user'
const loadUserApi = async () => {
    return await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
}

export default loadUserApi
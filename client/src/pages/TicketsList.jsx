import React, { useEffect, useState } from 'react'
import api from '../api'

const Ticketslist = () => {
	const [userList, setUserList] = useState([])
	const [userListData, setUserListData] = useState([])

	const getTicket = async () => {
		await api.getAllTickets().then(tickets => {
            setUserList(tickets.data.data)
        })
	}

	const getUserData = async () => {
		const json = JSON.stringify({ids: userList})
		await api.getUserByIds(json).then(users => {
            setUserListData(users.data)
        })
	}

    useEffect( () => {
		getTicket()
    	
    }, [])

    useEffect( () => {
		getUserData()
    	
    }, [userList])

    return (
    	<>
    		{userListData.map((user) => {
    			console.log(user)
    			return ( 
    				<div> 
    					{user.name}
    				</div>
    				)

	    		})
	    	}
    		{console.log()}
    	</>
    	)
}

export default Ticketslist;
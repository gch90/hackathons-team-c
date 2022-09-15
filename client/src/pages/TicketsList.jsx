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
					<div className='container-fluid'>
						
						<div className="row">
								<div className="col"><strong>Nom : </strong>{user.name}</div>
								<div className="col"><strong>Courriel : </strong>{user.email}</div>
								<div className="col"><strong>Age : </strong>{user.age}</div>
						</div> 
					</div>
					)
	    		})
	    	}
    		{console.log()}
    	</>
    	)
}

export default Ticketslist;
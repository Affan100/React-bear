import React, { useEffect } from 'react';
import BearCard from './BearCard';
import './BearList.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const BearList = () => {

    const bears = useSelector(state => state.bears);
    const dispatch = useDispatch();

    const getBears = async () => {
        const result = await axios.get(`http://localhost/api/bears`)
        console.log(result)
        dispatch({ type: 'GET_BEARS', bears: result.data })

    }

    useEffect(() => {
        getBears()
    }, [])

    console.log(bears)

    if (!bears || !bears.length)
        return (<h2 onClick={getBears}>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear} />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;
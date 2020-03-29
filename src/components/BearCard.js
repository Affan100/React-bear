// import './BearCard.css';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios'
// import React from 'react';

// const BearCard = props => {

//     const dispatch = useDispatch();
//     const form = useSelector(state => state.form);

//     const deleteBear = async () => {
//         await axios.delete(`http://localhost/api/bears/${props.id}`)
//         dispatch({ type: 'DELETE_BEAR', id: props.id })

//     }

//     const updateBear = async () => {
//         await axios.put(`http://localhost/api/bears/${props.id}`, form)

//         dispatch({
//             type: 'UPDATE_BEAR', id: props.id, bear: { ...form, id: props.id }
//         })

//     }

//     return (
//         <div className='bearcard-container'>
//             <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
//                 <p className='bearcard-weight'>{props.weight}</p>
//                 <p className='bearcard-name'>{props.name}</p>
//             </div>
//             <div className='bearcard-actions'>
//                 <div onClick={updateBear}>Update</div>
//                 <div onClick={deleteBear}>Delete</div>
//             </div>
//         </div>

//     )
// }

// export default BearCard;

import React from 'react';
import './BearCard.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { bearActions } from '../redux/store'
import { bindActionCreators } from 'redux';
const BearCard = props => {
    const form = useSelector(state => state.form)
    const actions = bindActionCreators(bearActions, useDispatch());
    const deleteBear = async () => {
        const result = await axios.delete(`http://localhost:8080/api/bears/${props.id}`)
        actions.deleteBear(props.id)
        //dispatch({ type: 'DELETE_BEAR', id: props.id })
    }
    const updateBear = async () => {
        const result = await axios.put(`http://localhost:8080/api/bears/${props.id}`)
        actions.updateBear(props.id, form)
        //dispatch({ type: 'UPDATE_BEAR', id: props.id, bear: { ...form, id: props.id } })
    }
    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='bearcard-weight'>{props.weight}</p>
                <p className='bearcard-name'>{props.name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={updateBear}>Update</div>
                <div onClick={deleteBear}>Delete</div>
                {
                    console.log(props.id)
                }
            </div>
        </div>

    )
}

export default BearCard;
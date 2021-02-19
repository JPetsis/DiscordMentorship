import { useDispatch, useSelector } from 'react-redux';
import { addPlaceholder, removePlaceholder } from '../../redux/actions';

function PlaceholderTest() {

    const placeholderValue = useSelector(state => state.placeholder.placeholderValue);
    const dispatch = useDispatch();

    return(
        <div className="PlaceholderTest">
        <p>{placeholderValue}</p>
        <br/>
        <button onClick={() => dispatch(addPlaceholder())}>Add</button>
        <button onClick={() => dispatch(removePlaceholder())}>Remove</button>
        </div>
    );
};

export default PlaceholderTest;
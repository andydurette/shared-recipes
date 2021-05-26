import React, {useContext} from 'react';
import { myContext } from '../../Context';

export default function HomePage() {
    const context = useContext(myContext);
    return  (
        <div>
        <h1>My Recipes</h1>
        </div>
    )
}
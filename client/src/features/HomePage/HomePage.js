import React, {useContext} from 'react';
import { myContext } from '../../Context';

export default function HomePage() {
    const context = useContext(myContext);
    return  (
        <div>
        {
        context ? (
            <h1>Welcome back {context.username}</h1>
        ):  <h1>Welcome to My Website</h1>
        }
        </div>
    )
}
import React from 'react';

export default function todoItem({title, id, completed}) {
    return (
        <li>
            <label htmlFor="">
                <input type="checkbox"
                defaultChecked={false}
                />
                <span>
                    {title}
                </span>
                <button>Delete</button>
            </label>
        </li>
    )
}
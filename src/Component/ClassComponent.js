import React from "react";
//import { ReactDOM } from 'react';

class Hello extends React.Component
{
    render()
    {
        return(
            <h1>I am at Hello class component</h1>
            
        )
    }
} 
class ClassComponent extends React.Component
{
    render()
    {
        return(
            <>
            <ul>
                <li>Apple</li>
                <li>Mango</li>
                <li>Watermelon</li>
            </ul>
            <Hello/>
            </>
        )
    }
}
export default ClassComponent

import React from "react";
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import avatarPng from "@/assets/avatar.png"
import avatarJpg from "@/assets/avatar.jpg"
import Calendar from "@/assets/calendar.svg"
import AppImage from "@/assets/app-image.svg"

export const App = () =>
{
    const [count, setCount] = React.useState<number>(0);
    const increment = () => setCount( prev => prev + 1 );

/*    if ( __PLATFORM__ === 'desktop' )
        return <div>DESKTOP</div>

    if ( __PLATFORM__ === 'mobile' )
        return <div>MOBILE</div>*/
    function TODO(x:number) {
        console.log(x)
    }

    TODO(1);

    return (
        <div data-testid={'App.DataTestId'}>
            <h3>ENVIRONMENT={__ENV__}</h3>
            <h3>PLATFORM={__PLATFORM__}</h3>
            <div>
                <img src={avatarPng} width={50} alt='avatar png'/>
                <img src={avatarJpg} width={50} alt='avatar jpg'/>
                <Calendar width={50} height={50} style={{color:'green'}} className={classes.icon}/>
                <AppImage width={50} height={50} style={{color:'green'}} className={classes.icon} />
            </div>
            <Link to={'/'}>home</Link>
            <br/>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>Hello World!</h1>
            <h2>{count}</h2>
            <button className={classes.button} onClick={increment}>inc<span>Hello</span></button>
            <Outlet/>
        </div>
    )
}
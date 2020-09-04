import React from 'react';


import "./home.scss"
import Message from "../../components/Message";



const Home = () => {

    return (
        <section className="home">
           <Message avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                    text="Hello world"
                    data="20.02.2020"/>

        </section>
    );
};

export default Home;
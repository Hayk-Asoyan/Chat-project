import React from 'react';


import "./home.scss"
import Message from "../../components/Message";


const Home = () => {

    return (
        <section className="home">
            <Message
                avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                text="Hello world"
                date={new Date()}
                attachement={[
                    {
                        filename: "image",
                        url: "https://source.unsplash.com/100x100/?rendom=1&nature,water"
                    },
                    {
                        filename: "image",
                        url: "https://source.unsplash.com/100x100/?rendom=2&nature,water"
                    },
                    {
                        filename: "image",
                        url: "https://source.unsplash.com/100x100/?rendom=3&nature,water"
                    }
                ]}
            />

            <Message avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
                     text="Hello friends"
                     date={new Date()}
                     isMe={true}
                     isReaded={false}

            />

        </section>

    );
};

export default Home;
import React from 'react';
import WatkinsFooter from '../../assets/Images/Watkinscontact.jpg';
import WatkinsLogo from '../../assets/Images/Watkinslogo.jpg';

const RobertWatkinsPage = () => {
    return (
        <>
            <h1 className="Watkinstlt">
                Robert D. Watkins, Jr.
                <img className="Watkinslogo" src={WatkinsLogo} alt="Watkins Logo" />
            </h1>

            <div className="bioboxes">
                <p className="lazobiobox">
                    &bull; Robert has over 35+ years of experience as a Personal Trainer and is the owner of Total Fitness Look Personal Trainers.
                    <br /><br />
                    &bull; Robert was born in Pennsylvania and raised in the DC metro area. A sports enthusiast from an early age, played a variety of competitive sports with basketball and football as his main focus. Robert continues to play basketball to this day at an elite level.
                    Robert has trained a wide variety of clients from kids through geriatric clients. These people participate at all levels from handicapped through recreational players to professional athletes and bodybuilders.
                    <br /><br />
                    &bull; Robert is known for his ability to adapt and modify a regimen to each individual client to help them meet their goals in a safe and controlled way. Robert has extensive training in all aspect of personal training and continues to attend seminars on a regular basis and believes that fitness can be improved at virtually any age or level and will result in a better quality of life.
                    Some clients benefit from being pushed and others require more nurturing. Robert works with each individual client to develop a starting point and then adapt the programs to ensure that they are enjoyable, varied, and that they move the client forward at a rate most comfortable for that client.
                    <br /><br />
                    &bull; Lastly, Robert's philosophy is that fitness encompasses more than exercise, and is willing and able to help clients examine their lifestyles and suggest changes to those who desire help with issues such as nutrition, flexibility, etc. Experience has shown that addressing these areas can assist clients in achieving their goals.
                </p>

                <img className="Watkinsimg" src={WatkinsFooter} alt="Robert Watkins Contact Information" />
            </div>
        </>
    );
}

export default RobertWatkinsPage;

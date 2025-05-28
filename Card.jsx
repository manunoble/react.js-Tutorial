import GlideGoPic from './assets/glideandgo.jpg';

function Card(){
    const Card = {
        title: "Glide and Go Safaris",
        description: "Latest Trip",
        image: "https://via.placeholder.com/150"
    };
    return (
        <div className="card">
        <img src={GlideGoPic} alt= "GlideGo Picture" style={{ width: '200px', height: 'auto' }} className="img" />
        <h2 className="title"> {Card.title}</h2>
        <p className="description"> {Card.description}</p>
        
        </div>
    );

}

export default Card;
import "./Home.css"

const Home = ({imagesSrc}) => {
    return (
        <div className="home">
            <img src={imagesSrc} alt="Travel" className="home_image"/>
            <h1 className="home_title">Leandro Azevedo</h1>
            <p>Desenvolvedor Fron-End</p>
        </div>
    ) 
}
export default Home

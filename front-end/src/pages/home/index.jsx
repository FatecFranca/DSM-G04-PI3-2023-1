import Content from "../../components/Content";
import background from "../../assets/img/background.png"
import '../../App.css'


export const Home = () => {
    return (
        <div className="App">

            <div className="main">
            <img src={background} alt="" />

            </div>
            <Content />
        </div>
    );
}


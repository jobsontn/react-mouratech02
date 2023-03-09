import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./components/Exemplo1";

/* class OlaMundo extends React.Component{
    render(){
        return <h1>Olá {this.props.nome}</h1>;
    }
} */

function OlaMundo(props){
    return <h1>Olá {props.nome}</h1>;
}

class Pagina01 extends React.Component{
    render(){
        return (
            <div>
                <OlaMundo nome={this.props.nome[0]}></OlaMundo>
                <OlaMundo nome={this.props.nome[1]}></OlaMundo>
            </div> 
        );
    }
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Timer start={0} ms={1000}></Timer>
        <Timer start={100} ms={500}></Timer>
    </div>
);
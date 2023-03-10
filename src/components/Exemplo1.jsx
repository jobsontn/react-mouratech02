import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    const { start } = this.props;
    this.state = {
      seconds: start,
    };
  }

  contar() {
    this.setState(
      (state) => ({ seconds: state.seconds + 1 }),
    );
  }

  startStop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.interval = setInterval(() => this.contar(), 1000);
    }
  }

  zero() {
    this.setState(() => ({
      seconds: 0,
    }));
  }

  /* componentDidMount() {
        this.interval = setInterval(() => this.contar(), this.props.ms);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    } */

  render() {
    const { seconds } = this.state;
    return (
      <>
        <div className="bg-black border-black w-48 md:w-96 h-16 m-4 rounded-xl flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white cronometro">
            {seconds}
          </h1>
        </div>
        <div className="flex flex-row justify-center w-48 md:w-96 m-4 ">
          <button type="button" onClick={() => this.startStop()} className="bg-azulEscuro text-white m-4 px-4 scroll-py-24 w-36">Iniciar/Parar</button>
          <button type="button" onClick={() => this.zero()} className="bg-red-500 text-white m-4 px-4 scroll-py-24 w-36">Zerar</button>
        </div>

      </>
    );
  }
}

export default Timer;

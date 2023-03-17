import React from 'react';

function Form04(props) {
  const { change } = props;
  return (
    <div className="border-2 bg-branco border-gray-300 rounded-lg h-full w-full sm:h-auto sm:w-80 md:w-96  p-8">
      <div>
        <img
          className="mx-auto h-auto w-auto"
          src="/img/mouratech.png"
          alt="OK"
        />
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-preto">
          Confirme suas informações
        </h2>
      </div>
      <form className="mt-8 space-y-6">
        <div className="-space-y-px rounded-md shadow-sm">
          <p>
            Matrícula:
            <strong>&nbsp;</strong>
          </p>
          <p>
            Nome:
            <strong>&nbsp;</strong>
          </p>
          <p>
            Data de Nascimento:
            <strong>&nbsp;</strong>
          </p>
          <p>
            E-mail:
            <strong>&nbsp;</strong>
          </p>
          <p>
            Celular:
            <strong>&nbsp;</strong>
          </p>
          <p>
            Instituição:
            <strong>&nbsp;</strong>
          </p>
          <p>
            Campus:
            <strong>&nbsp;</strong>
          </p>
          <p>
            Curso:
            <strong>&nbsp;</strong>
          </p>
          <p>
            Período:
            <strong>&nbsp;</strong>
          </p>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => change(3)}
            className="group relative flex w-24 justify-center rounded-md bg-azulClaro py-2 px-3 text-sm font-semibold text-white hover:bg-azulClaro/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azulClaro cursor-pointer"
          >
            Anterior
          </button>
          <button
            type="submit"
            className="group relative flex w-24 justify-center rounded-md bg-azulEscuro py-2 px-3 text-sm font-semibold text-white hover:bg-azulEscuro/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azulEscuro cursor-pointer"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form04;

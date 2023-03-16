import React from 'react';

function FormProgress(props) {
  const { step = 1, steps = ['Matrícula', 'Dados Pessoais', 'Curso', 'Confirmação'] } = props;

  const stepsNumbers = steps.reduce((total, currentValue, currentIndex) => {
    const bg = (step > currentIndex) ? 'bg-green-400/50' : 'bg-white';
    if (currentIndex === 0) {
      return <div className={`flex items-center justify-center w-10 h-10 rounded-full text-3xl ${bg}`}>1</div>;
    }
    const line = <div className={`flex items-center justify-center w-10 h-2 text-3xl ${bg}`}>&nbsp;</div>;
    const number = <div className={`flex items-center justify-center w-10 h-10 rounded-full text-3xl ${bg}`}>{currentIndex + 1}</div>;
    return (
      <>
        {total}
        {line}
        {number}
      </>
    );
  }, '');

  const stepsTexts = steps.reduce((total, currentValue, currentIndex) => {
    if (currentIndex === 0) {
      return <div className="flex items-center justify-center text-xs w-10">{currentValue}</div>;
    }
    return (
      <>
        {total}
        <div className="flex items-center justify-center text-xs w-10">&nbsp;</div>
        <div className="flex items-center justify-center text-xs w-10">{currentValue}</div>
      </>
    );
  }, '');

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center text-center">
        {stepsNumbers}
      </div>
      <div className="flex flex-row items-start justify-center my-2 text-center">
        {stepsTexts}
      </div>
    </div>
  );
}

export default FormProgress;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VscTrash } from 'react-icons/vsc';

function TableData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://jobsontenorio.com.br/api/students2?search=${search}`,
      );
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const showTableData = () => {
    if (loading) {
      return (
        <div>
          Carregando...
        </div>
      );
    }
    if (error) {
      return (
        <div>
          Erro
        </div>
      );
    }
    return (
      <tr className="even:bg-gray-200 odd:bg-white">
        <td className="border border-black px-2 py-1 text-center">{data[0].enrollment}</td>
        <td className="border border-black px-2 py-1 text-center">482.451.661-70</td>
        <td className="border border-black px-2 py-1 text-left">Ohana Montenegro Velasques</td>
        <td className="border border-black px-2 py-1 text-left">richard.reis@example.org</td>
        <td className="border border-black px-2 py-1 text-center">5</td>
        <td className="border border-black px-2 py-1 text-center">
          <div className="flex flex-row gap-2 justify-center">
            <button type="button" aria-label="Delete" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-2 rounded">
              <VscTrash />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white rounded-xl m-4 p-4 flex flex-col gap-8">
      <div className="flex flex-row justify-end">
        <label htmlFor="txtPesquisar" className="text-xl">
          Pesquisar:&nbsp;
          <input
            type="text"
            name="txtPesquisar"
            id="txtPesquisar"
            className="border border-gray-500 rounded p-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="uppercase">
            <th className="border border-black px-2 py-1">Matrícula</th>
            <th className="border border-black px-2 py-1">CPF</th>
            <th className="border border-black px-2 py-1">Nome</th>
            <th className="border border-black px-2 py-1">email</th>
            <th className="border border-black px-2 py-1">Período</th>
            <th className="border border-black px-2 py-1">Opções</th>
          </tr>
        </thead>
        <tbody>
          {showTableData}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;

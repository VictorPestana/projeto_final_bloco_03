import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Services";

function FormCategoria() {


    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            await atualizar('/categorias', categoria, setCategoria);
            alert('A Categoria foi atualizada com sucesso!');
        } else {
            await cadastrar('/categorias', categoria, setCategoria);
            alert('A Categoria foi cadastrada com sucesso!');
        }

        setIsLoading(false)
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição de Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu categoria"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                        {isLoading ?
                            <span>Carregando...</span> :
                            <span>Sim</span>
                        }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;

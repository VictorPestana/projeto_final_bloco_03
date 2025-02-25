import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Services";
import CardCategorias from "../cardcategoria/CardCategoria";


function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {

        await buscar('/categorias', setCategorias)
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            {categorias.length === 0 && (
            <div className="flex justify-center items-center h-64">
                <div className="loader"></div>
            </div>
            )}
            <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorias.map((categoria) => (
                    <CardCategorias key={categoria.id} categoria={categoria} />
                ))}
                </div>
            </div>
            </div>
        </>
    )
}

export default ListaCategorias;

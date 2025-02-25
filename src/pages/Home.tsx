function Home() {
  return (
    <>
      <div
        className="
                bg-red-500
                flex 
                justify-center 
                "
      >
        <div
          className="
                    container 
                    grid 
                    grid-cols-2 
                    text-black
                    "
        >
          <div
            className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        "
          >
            <h2
              className="
			  				text-white
                            text-5xl 
                            font-bold
                            "
            >
              Welcome!
            </h2>
            <p className="text-2xl text-white">
              Aqui você encontra Medicamentos e Cosméticos Baratos!
            </p>

			<div className="flex justify-around gap-4">
                            <button className='
                                    rounded
                                    bg-white
                                    text-white-900 
                                    py-2 
                                    px-4
                                    '>Cadastrar Produto</button>
                        </div>
                    </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/vzr6ryejm/farmacia/home.png?updatedAt=1725625779667"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

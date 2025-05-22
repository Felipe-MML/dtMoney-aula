import { useState } from "react";

export interface RegisterProps {
    openClose: () => void
}

const Registry = ({ openClose }: RegisterProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    openClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-40">

        <div className="bg-white rounded-xl w-[576px] h-[588px] flex-col items-center justify-center  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg">
      <button onClick={openClose} className="bg-none border-none float-right cursor-pointer">X</button>
      <h1 className="font-poppins ml-6 mt-[40px] text-[24px] ml-[15px] font-bold text-[#363F5F]">Cadastrar transação</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          className="w-[480px] h-[64px] border border-gray-400 rounded-xl bg-[#E7E9EE] mt-6 placeholder:text-[#969CB2]"
        />
        <input
          type="text"
          placeholder="Preço"
          className="w-[480px] h-[64px] border border-gray-400 rounded-xl bg-[#E7E9EE] mt-6 placeholder:text-[#969CB2]"
        />
    
        <div className="flex gap-4">
      <label className="flex items-center gap-2 border border-[#969CB2] p-4 rounded cursor-pointer w-[236px] justify-center mt-5">
        <input type="radio" name="tipo" value="entrada" className="hidden" />
        <img src="/Entry.png" alt="Ícone Entrada" className="w-6 h-6" />
        <span>Entrada</span>
      </label>
    
      <label className="flex items-center gap-2 border border-[#969CB2] p-4 rounded cursor-pointer w-[236px] justify-center mt-5 ">
        <input type="radio" name="tipo" value="saida" className="hidden" />
        <img src="/Exit.png" alt="Ícone Saída" className="w-6 h-6" />
        <span>Saída</span>
      </label>
    </div>
    
    
        <input
          type="text"
          placeholder="Categoria"
          className="w-[480px] h-[64px] border border-gray-400 rounded-xl bg-[#E7E9EE] mt-6 placeholder:text-[#969CB2]"
        />
        <input
          type="submit"
          value="Cadastrar"
          className="w-[480px] h-[64px] border rounded-xl bg-[#33CC95] text-white font-poppins font-bold cursor-pointer mt-6"
        />
      </form>
    </div>
    
    </div>
      );
    };

export default Registry;

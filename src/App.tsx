import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [kanbanName, setKanbanName] = useState('Meu Kanban')
  const [editing, setEditing] = useState(false)

  function handleEdit() {
    setEditing(true)
  }

  return (
    <div className="container">
      <div className="mx-8 flex">
        <aside className="w-44">
          <div className="mt-8 mb-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="56"
              viewBox="0 0 50 56"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.0735 8.24579C27.0435 6.99068 23.7653 6.44946 20.4926 6.66394C17.22 6.87847 14.0405 7.84294 11.2002 9.48278L8.33438 11.1373L5.02529 5.40582L7.89107 3.75128C11.6105 1.60388 15.7741 0.340826 20.0598 0.0599609C24.3454 -0.220955 28.6383 0.487801 32.6062 2.13135C36.5741 3.77495 40.1108 6.30926 42.9426 9.53832C45.7742 12.7673 47.8253 16.6046 48.9372 20.7531C50.0485 24.9016 50.1911 29.2502 49.3531 33.4625C48.5152 37.6749 46.7196 41.638 44.1049 45.0454C41.4902 48.4527 38.1271 51.213 34.2752 53.1124C30.4232 55.0119 25.4548 56 21.8911 56C18.3273 56 16.2464 55.4655 13.5136 54.3337C10.8577 53.2336 8.4445 51.6213 6.4117 49.5885C4.37895 47.5557 2.7665 45.1421 1.66636 42.4862C0.566262 39.8305 0 36.9838 0 34.1091C0 31.2344 0.566262 28.3877 1.66636 25.7318C2.7665 23.0759 4.37895 20.6626 6.4117 18.6299C8.4445 16.5971 10.8577 14.9846 13.5136 13.8845C16.1695 12.7844 19.0162 12.2182 21.8909 12.2182C24.7657 12.2182 27.6123 12.7844 30.2682 13.8845C32.9241 14.9846 35.3374 16.5971 37.3701 18.6299C39.4029 20.6626 41.0152 23.0759 42.1154 25.7318C42.5888 26.8742 42.963 28.0519 43.2364 29.252C43.3698 26.9738 43.1381 24.6825 42.5445 22.466C41.6954 19.298 40.1293 16.3678 37.9668 13.902C35.8043 11.4362 33.1036 9.50085 30.0735 8.24579ZM8.67359 41.7612C9.04894 34.6464 14.937 28.9928 22.1455 28.9928C29.0753 28.9928 34.7848 34.2178 35.5494 40.9431C35.7114 40.6192 35.8621 40.2892 36.0011 39.9537C36.7686 38.1007 37.1637 36.1148 37.1637 34.1091C37.1637 32.1035 36.7686 30.1175 36.0011 28.2645C35.2336 26.4115 34.1086 24.7279 32.6904 23.3096C31.2722 21.8914 29.5885 20.7665 27.7355 19.9989C25.8826 19.2314 23.8966 18.8364 21.8909 18.8364C19.8853 18.8364 17.8993 19.2314 16.0463 19.9989C14.1934 20.7665 12.5097 21.8914 11.0915 23.3096C9.67329 24.7279 8.5483 26.4115 7.78074 28.2645C7.01324 30.1175 6.61818 32.1034 6.61818 34.1091C6.61818 36.1148 7.01324 38.1007 7.78074 39.9537C8.0388 40.5766 8.33718 41.1804 8.67359 41.7612ZM29.0182 42.4836C29.0182 46.2794 25.9412 49.3564 22.1455 49.3564C18.3498 49.3564 15.2727 46.2794 15.2727 42.4836C15.2727 38.6881 18.3498 35.611 22.1455 35.611C25.9412 35.611 29.0182 38.6881 29.0182 42.4836Z"
                fill="white"
              />
            </svg>
          </div>
          <nav className="mr-12">
            <ul>
              <li className="cursor-pointer flex items-center font-bold">
                <img
                  className="w-5 h-5 mr-4"
                  src="/images/tablet-portrait.png"
                  alt=""
                />
                Boards
              </li>
              <li className="cursor-pointer mt-8 flex items-center">
                <img className="w-5 h-5 mr-4" src="/images/people.png" alt="" />
                Equipes
              </li>
              <li className="cursor-pointer mt-8 flex items-center">
                <img
                  className="w-5 h-5 mr-4"
                  src="/images/document-text.png"
                  alt=""
                />
                Relatórios
              </li>
              <li className="cursor-pointer mt-8 flex items-center">
                <img className="w-5 h-5 mr-4" src="/images/cog.png" alt="" />
                Ajustes
              </li>
            </ul>
          </nav>
        </aside>
        <main className="bg-white text-black rounded-[32px] min-h-screen p-14 mt-1 flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center">
              {editing ? (
                <textarea
                  onChange={(e) => setKanbanName(e.target.value)}
                  className="resize-none outline-none font-bold text-4xl mr-3 p-2 h-fit border-2 rounded-md border-black"
                >
                  {kanbanName}
                </textarea>
              ) : (
                <h1 className="font-bold text-4xl mr-3">{kanbanName}</h1>
              )}
              <button type="button" onClick={() => setEditing(!editing)}>
                <img
                  className="w-6 h-6 cursor-pointer"
                  src="/images/edit.png"
                  alt="Editar"
                />
              </button>
            </div>
            <img
              className="w-16 h-16"
              src="/images/profile-picture-1.png"
              alt=""
            />
          </div>
          <div className="flex mt-11">
            <button className="flex mr-4 bg-purple py-3 px-8 text-white rounded-md">
              <img className="w-6 h-6 mr-2" src="/images/filter.png" alt="" />
              Filtrar
            </button>
            <div className="w-full relative">
              <img
                className="absolute h-6 w-6 mx-6 my-3"
                src="/images/search.png"
                alt=""
              />
              <input
                className="w-full border-[#E3E3E3] border-2 rounded-lg pr-3 pl-14 py-3"
                placeholder="Busque por cards, assuntos ou responsáveis..."
                type="text"
              />
            </div>
          </div>
          <section className="grid grid-cols-3 gap-12 mt-8">
            <div>
              <h2 className="font-bold text-xl">A fazer</h2>
              <Card
                title="#boraCodar um Kanban 🧑‍💻"
                description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban."
                tags={['rocketseat', 'desafio']}
              />
              <Card
                title="#boraCodar um Kanban 🧑‍💻"
                description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban."
                tags={['rocketseat', 'desafio']}
              />
              <Card
                title="#boraCodar um Kanban 🧑‍💻"
                description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban."
                tags={['rocketseat', 'desafio']}
              />
            </div>
            <div>
              <h2 className="font-bold text-xl">Fazendo</h2>
              <Card
                title="#boraCodar um Kanban 🧑‍💻"
                description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban."
                tags={['rocketseat', 'desafio']}
              />
              <Card
                title="#boraCodar um Kanban 🧑‍💻"
                description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban."
                tags={['rocketseat', 'desafio']}
              />
            </div>
            <div>
              <h2 className="font-bold text-xl">Feito</h2>
              <Card
                title="#boraCodar um Kanban 🧑‍💻"
                description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban."
                tags={['rocketseat', 'desafio']}
              />
              <Card
                title="#boraCodar um Kanban 🧑‍💻"
                description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban."
                tags={['rocketseat', 'desafio']}
              />
              <Card
                title="#boraCodar um Kanban 🧑‍💻"
                description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um
        quadro de Kanban."
                tags={['rocketseat', 'desafio']}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'


const App = () => {
  return (
   <>
   <Header/>
   <Hero num='1' about="как мы сидим на уроке " text='АББОС АКА'  img='https://png.klev.club/uploads/posts/2024-04/png-klev-club-8qg2-p-memnii-kot-png-11.png' />
   <Hero num='2' about="плов: когда не успеваешь " text='переписать стили'  img='https://png.klev.club/uploads/posts/2024-04/png-klev-club-8q5q-p-memnii-kot-png-13.png' />
   <Hero num='3' about="плов: когда Аббос ака " text='купил вкусняшки'  img='https://png.klev.club/uploads/posts/2024-04/png-klev-club-8si8-p-memnii-kot-png-20.png' />
   <Hero num='4' about="Расим идет играть " text='в арм'  img='https://www.meme-arsenal.com/memes/652675b5f9c2dd085425fb5d1f7d7b8b.jpg' />
   <Hero num='5' about="севинч пинает " text='первого встречного'  img='/sevinch.png' />
   <Hero num='6' about="что мы желаем " text='инернет-провайдору sarcor'  img='https://opis-cdn.tinkoffjournal.ru/mercury/22-cats-mem.vhkyunpe6pqn..gif' />
   <Hero num='7' about="мы когда " text='поняли тему'  img='https://opis-cdn.tinkoffjournal.ru/mercury/07-cats-mem.wuz3ytwagsc7..gif' />
   
  
   </>




  )
}

export default App
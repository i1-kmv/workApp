import React from 'react'
import './styles/app.sass'
import {Header} from "./componets/Header"
import {SearchVacancyPage} from "./pages/SearchVacancyPage"

function App() {
    return (
        <div className="app">
            <Header/>
            <SearchVacancyPage/>
        </div>
    );
}

export default App;

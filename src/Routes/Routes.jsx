import React from 'react'
import { BrowserRouter,
         Route,
         Routes as ReactDomRoutes  
} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Home from "../pages/Home/Home"
import PokeApi from "../pages/PokeApi/PokeApi"
import ToDo from "../pages/ToDo/ToDo"

const Routes = () => {
  return (
    <BrowserRouter>

        <Layout>

            <ReactDomRoutes>

                <Route path='/' element={<Home />} />
                <Route path='PokeApi' element={<PokeApi />} />
                <Route path='ToDo' element={<ToDo />} />
                <Route path='*' element={<p>Error 404 temporal</p>} />

            </ReactDomRoutes>

        </Layout>

    </BrowserRouter>
  )
}

export default Routes
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Dashboard</Title>

      <Form>
        <input placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars1.githubusercontent.com/u/51239826?s=460&u=aa1e806fc6a256c7e607c3b9b889c8e656e8da87&v=4"
            alt="User Image"
          />
          <div>
            <strong>github-explorer</strong>
            <p>Easy peasy way to explore github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard

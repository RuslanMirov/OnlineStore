import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
//import PropTypes from 'prop-types'

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery}) => (
  <Menu secondary>
      <Menu.Item
        active={filterBy === 'expensive'}
        onClick={setFilter.bind(this, 'expensive')}>По цене (дорогие)</Menu.Item>

      <Menu.Item
        active={filterBy === 'cheap'}
        onClick={setFilter.bind(this, 'cheap')}>По цене (дешевые)</Menu.Item>

      <Menu.Item
        active={filterBy === 'author'}
        onClick={setFilter.bind(this, 'author')}>По алфавиту (Автор)</Menu.Item>

      <Menu.Item><Input
         icon="search"
         onChange={ e => setSearchQuery(e.target.value)}
         value={searchQuery}
         placeholder="Поиск по книгам..."></Input></Menu.Item>
  </Menu>
)

export default Filter

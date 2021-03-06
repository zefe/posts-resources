import * as React from 'react'

function PokemonFilter (props: any) {
  const { onSubmit, onChange, value, ...restProperties } = props
  return (
    <form onSubmit={props.onSubmit}>
      <input onChange={props.onChange} value={props.value} {...restProperties} />
    </form>
  )
}

export default PokemonFilter
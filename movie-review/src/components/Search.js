import React, {useState} from 'react'

const Search = ({searchMovies}) => {
  const [text,setText] = useState('')

 const onChange = (e) =>{
    setText(e.target.value)
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    searchMovies(text)
  }

    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input 
            type='text' 
            name='text' 
            placeholder='Search Movie...' 
            onChange={onChange}
          />

          <input 
            type='submit' 
            value='search' 
            className='btn btn-dark btn-block'
          />

        </form>
      </div>
    )
}

export default Search;
import React from 'react';

function Search(props) {
    const {handleSubmit, handleChange, searchString} = props;
    return (
        <form onSubmit={handleSubmit} className='mb-3 text-center' style={{outline: 'none'}}>
            <input
                type='text'
                name='searchString'
                placeholder='search'
                required
                onChange={handleChange}
                value={searchString}
                style={{border: 0, borderBottom: 'solid 2px #1F09df', background: 'transparent'}}
            />
            <button>Search</button>
        </form>
    );
}

export default Search;

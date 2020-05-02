import React from 'react';

function Search(props) {
    const {handleSubmit, handleChange, searchString} = props;
    return (
        <form onSubmit={handleSubmit} className='mb-5 mt-4 w-75 ml-5 input-group'>
            <input
                type='text'
                name='searchString'
                placeholder='Recipe Name'
                required
                onChange={handleChange}
                value={searchString}
                className='form-control'
            />
            <div class='input-group-prepend mr-5'>
                <button class='btn btn-primary'>Search</button>
            </div>
        </form>
    );
}

export default Search;

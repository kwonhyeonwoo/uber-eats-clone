import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import "./css/index.css";

type Props = {

}

const Search = ({ }: Props) => {
    return (
        <div className='search-container'>
            <form action="" className='search-form'>
                <input type="text" placeholder='Search' />
                <button>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    );
};

export default Search;
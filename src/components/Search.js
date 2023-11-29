import React, { useContext, useState } from 'react'
import { Icon } from '../Icons'
import songContext from '../context/SongContext';
import SongItem from './SongItem';

function Search() {

    const [searchTerm,setSearchTerm]=useState("");
    const [searchResults,setSearchResults]=useState([]);
    const context=useContext(songContext);
    const {songs}=context;

    const handleSearch=()=>{
        const index=songs.findIndex((x)=>x.title===searchTerm);
        if (index!==-1){
            setSearchResults([songs[index]]);

        }
        else{
            setSearchResults([]);
        }
    };

  return (
    <div className='overflow-y-auto h-screen'>
    <div className='mr-auto ml-4 relative mt-2'>
        <label htmlFor="search_box"
        className='text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0'
        >
            <Icon size={24} name="search"/>
        </label>
        <input className="h-10 pl-12 outline-none text-black font-medium bg-white rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem]"
        type="text" 
        id="search_box" 
        placeholder='What do you want to listen to?'
        onChange={(e)=>setSearchTerm(e.target.value)}
        value={searchTerm}
        />
        <button onClick={handleSearch}
        className='bg-primary hover:bg-opacity-50 text-white rounded py-1 px-2 ml-2'>
            Search
        </button>

    </div>

    <div className='grid grid-cols-5 gap-x-6 gap-y-5'>
        {
            searchResults.map((result,idx)=>(
                <SongItem item={result} key={idx}/>
            ))
        }
    </div>

    </div>
  )
}

export default Search
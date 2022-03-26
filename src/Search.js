import React, { useContext, useEffect } from 'react';
import { ChevronRight } from 'react-bootstrap-icons';
import { IPContext } from './Context';

const Search = () => {

    const ctx = useContext(IPContext);
    
    const fetchIPAddress = async () => {
        const res = await fetch(`https://ipapi.co/${ctx.search}/json`);
        const data = await res.json();
        ctx.setResults(data);
    }

    useEffect(() => {
        fetchIPAddress();
    },[]);

    const inputChange = (e) => {
        if(e.target.value === ""){
            ctx.setSearch("")
        }
        ctx.setSearch(e.target.value);
    }

    const submitIP = (e) => {
        e.preventDefault();
        fetchIPAddress();

    }

    return (
        <>
            <div className="row search">
                <div className="col search-form">
                    <input type="text" name="search" value={ctx.search} placeholder="Search for any IP address or domain" onChange={inputChange} />
                    <button className="chevRightIcon" onClick={submitIP}><ChevronRight className="chevr-icon" size={20}/></button>
                </div>
            </div>
            
            <div className="row search-results">
                <div className="col-sm-12 col-md-3 align-self-center text-start ip-address result">
                    <h6>IP Address</h6>
                    <p>{ctx.results.ip}</p>
                </div>
                <div className="col-sm-12 col-md-3 align-self-center text-start ip-location result">
                    <h6>Location</h6>
                    <p>{ctx.results.city}, {ctx.results.region_code} {ctx.results.postal}</p>
                </div>
                <div className="col-sm-12 col-md-3 align-self-center text-start ip-timezone result">
                    <h6>Timezone</h6>
                    <p>UTC{ctx.results.utc_offset}</p>
                </div>
                <div className="col-sm-12 col-md-3 align-self-center text-start ip-isp result">
                    <h6>ISP</h6>
                    <p>{ctx.results.org}</p>
                </div>
            </div>
        </>
    )
}

export default Search
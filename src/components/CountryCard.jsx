import React, {useEffect, useState} from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language';
import MoneyIcon from '@mui/icons-material/Money';
const CoutryCard = ({selectValue, country}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData( country.filter(co => co.altSpellings[1] === selectValue))

    }, [selectValue])
    console.log(data)
    const  spanCss= "text-white text-xl font-bold border-b-2 w-full"
    return (
        <>
            {
                data && data.map((item, i) => (
                    <div key={i} className="w-96 h-auto border-2 flex items-center justify-around flex-col max-sm:w-1/2">
                        <img className="border-b-2 w-full"  src={item?.flags?.png} alt=""/>
                        <span className="span"><PublicIcon className="mr-5 text-black"/>{item?.altSpellings[1]}</span>
                        <span className="span">{item?.flag}<span className="ml-3">{item?.capital[0]} </span></span>
                        <span className="span" ><LanguageIcon className="mr-5 text-black"/>{item?.subregion}</span>
                        <span className="span"><CommentIcon className="mr-5 text-black"/>{Object.values(item?.languages)[0]}</span>
                        <span className="span border-none"><MoneyIcon className="mr-5 text-black"/>{Object.values(item?.currencies)[0].name}<span>{Object.values(item?.currencies)[0].symbol}</span></span>

                        <span></span>
                    </div>
                ))
            }
        </>
)
}

export default CoutryCard;
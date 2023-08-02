import React, { useState } from 'react';
function SpotCheck2(){
    const [companies, setCompanies]=useState([
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }
  ])
return(
    companies.map(c=><div key={c.name}>{c.name} {c.revenue}</div>)
)
} 
export default SpotCheck2;
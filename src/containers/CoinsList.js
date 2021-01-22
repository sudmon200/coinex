import React, {useEffect, useState} from 'react'
import axios from '../apis/axios'
import CoinsTable from '../components/CoinsTable'

function CoinsList() {
  const [coinsList, setCoinsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // console.log('isLoading =>', isLoading)
  // console.log('coinsList =>', coinsList)

  useEffect(() => {
    const fetchData = async () =>{
      setIsLoading(true)
      const response = await axios.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin,ethereum' //@ToDo: i) make dynamic, ii)as per user's choice 
        }
      })
      setCoinsList(response.data);
      setIsLoading(false);
    }
    fetchData();
  }, [])

  return (
    <div>
      <h2>Coins List</h2>
      {
        !isLoading &&
        coinsList.map((coin)=>{
          return <CoinsTable key={coin.id} coin={coin}/>
        })
      }
    </div>
  )
}

export default CoinsList

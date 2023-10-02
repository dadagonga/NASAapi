import { useEffect, useState } from "react"
import axios from "axios"

const dohvatiSliku = () => {

    const [slika, setSlika] = useState()

    useEffect (() => {
        getSlika()
      }, [])

    const getSlika = () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => setSlika(res.data))
    }

  return (
    <>
        <div>NASA</div>

        {slika && slika.map(slika => {
            return(
                <div key={slika.url}>{slika.title}{slika.explanation}</div>
                )
            })
        }
    </>
  )
}

export default dohvatiSliku
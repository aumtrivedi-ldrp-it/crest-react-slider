import { useState } from 'react'
import { CATEGORY } from '../helper/constant'
import Card from './Card'
import Button from './Button'

const CardList = () => {
    const [category, setCategory] = useState(CATEGORY[0])

    return (<>
        <div className='flex content-center items-center'>
            {
                CATEGORY.map((result) => {
                    return (
                            <Button 
                            key={Math.random()}
                            onClick={() => setCategory(result)}
                            type={'button'} 
                            value={result.type} 
                            customClass={`border-green-700 ${result.type === category.type ? 'bg-green-700 text-white' : 'text-gray-900  border border-gray-300 bg-white'} rounded-full font-semibold py-2 px-4 border border-gray-400 rounded m-2 shadow`}/>
                        )
                })
            }
        </div>
        <Card category={category} />
    </>)
}
export default CardList
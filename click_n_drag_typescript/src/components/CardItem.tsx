import { Data } from "../interfaces"

interface Props {
    data: Data
}

export const CardItem = ({ data, handleDragging }: Props) => {

    return (
        <div className='card-container'>
            <p>{data.content}</p>
        </div>
    )
}

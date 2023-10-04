import { ContainerCards } from "./ContainerCards"
import { Status } from "../interfaces"
import { data } from "../assets"

const typesHero: Status[] = ['good', 'normal', 'bad']

export const DragAndDrop = () => {
    return (
        <div className="grid">
            {
                typesHero.map( container => (
                    <ContainerCards
                        status={container}
                        key={container}
                        items={data}
                    />
                ))
            }
        </div>
    )
}

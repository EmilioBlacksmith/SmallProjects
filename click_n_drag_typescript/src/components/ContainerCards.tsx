import { Data, Status } from "../interfaces"

interface Props {
    items: Data[]
    status: Status
}

export const ContainerCards = ({ items = [], status }: Props) => {

    return (
        <div className="layout-cards">
            <p>{status} hero</p>
        </div>
    )
}

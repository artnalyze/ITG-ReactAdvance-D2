type Props = {
    children?: JSX.Element | JSX.Element[]
}

const FrontLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default FrontLayout
